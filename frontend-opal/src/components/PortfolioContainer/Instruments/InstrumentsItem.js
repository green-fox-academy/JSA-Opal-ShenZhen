import React, { useContext } from 'react';
import { View, Text, Image, TouchableOpacity } from 'react-native';
import PropTypes from 'prop-types';
import { Card, Button } from 'native-base';
import { NavigationContext } from 'react-navigation';
import styles from './styles';

function InstrumentsItem({ instrumentItem }) {
  const navigation = useContext(NavigationContext);
  const {
    company,
    stockExchange,
    profileImg,
    amount,
    marketValue,
    symbol,
    originalPrice
  } = instrumentItem;
  const change = (marketValue - originalPrice) * amount;
  const changePercent = ((marketValue - originalPrice) / originalPrice) * 100;
  const changeColor = marketValue - originalPrice > 0 ? styles.positive : styles.negative;
  const infoPairs = [
    {
      title: 'Positions:',
      content: amount,
      style: ''
    },
    {
      title: 'Market Value:',
      content: marketValue,
      styles: ''
    },
    {
      title: 'Unrlzd P/L:',
      content: change.toFixed(0),
      style: changeColor
    },
    {
      title: 'Unrlzd P/L %:',
      content: changePercent.toFixed(2),
      style: changeColor
    }
  ];

  return (
    <View>
      <Card>
        <View style={styles.header}>
          <View style={styles.profileImgContainer}>
            <Image style={styles.profileImg} source={{ uri: profileImg }} />
          </View>
          <View style={styles.profileText}>
            <Text>{company}</Text>
            <Text style={styles.stockExchange}>{stockExchange}</Text>
          </View>
        </View>

        <View style={styles.instruments}>
          {infoPairs.map(info => (
            <View style={styles.instrumentDetail} key={`infoPair ${symbol} ${info.title}`}>
              <Text style={styles.instrumentDetailText}>{info.title}</Text>
              <Text style={[styles.instrumentDetailText, info.style]}>{info.content}</Text>
            </View>
          ))}
        </View>

        <View style={styles.buttonContainer}>
          <Button
            style={styles.button}
            onPress={() => {
              navigation.navigate('TradeContainer', {
                detailTitle: symbol
              });
            }}
          >
            <Text>TRADE</Text>
          </Button>
          <Button
            style={styles.button}
            onPress={() => {
              navigation.navigate('InstrumentDetail', {
                detailTitle: symbol
              });
            }}
          >
            <Text>DETAILS</Text>
          </Button>
        </View>
      </Card>
    </View>
  );
}

InstrumentsItem.propTypes = {
  instrumentItem: PropTypes.shape({
    company: PropTypes.string,
    stockExchange: PropTypes.string,
    profileImg: PropTypes.any,
    amount: PropTypes.number,
    marketValue: PropTypes.number,
    symbol: PropTypes.string,
    originalPrice: PropTypes.number
  }).isRequired
};

export default InstrumentsItem;
