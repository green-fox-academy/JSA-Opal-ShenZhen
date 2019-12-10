import React, { useContext } from 'react';
import { View, Text, Image } from 'react-native';
import PropTypes from 'prop-types';
import { Card, Button } from 'native-base';
import { NavigationContext } from 'react-navigation';
import styles from './styles';

function InstrumentsItem({ instrumentItem }) {
  const navigation = useContext(NavigationContext);
  const { company, stockExchange, profileImg, amount, marketValue, symbol } = instrumentItem;

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
          <View style={styles.instrumentDetail}>
            <Text style={styles.instrumentDetailText}>Positions:</Text>
            <Text style={styles.instrumentDetailText}>{amount}</Text>
          </View>
          <View style={styles.instrumentDetail}>
            <Text style={styles.instrumentDetailText}>Market Value:</Text>
            <Text style={styles.instrumentDetailText}>{marketValue}</Text>
          </View>
        </View>

        <View style={styles.buttonContainer}>
          <Button style={styles.button}>
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
    symbol: PropTypes.string
    // unrlzedPLPercentage: PropTypes.string,
    // unrlzedPL: PropTypes.number
  }).isRequired
};

export default InstrumentsItem;
