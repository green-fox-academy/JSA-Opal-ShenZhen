import React, { useContext } from 'react';
import { View, Text, Image, TouchableOpacity } from 'react-native';
import PropTypes from 'prop-types';
import { NavigationContext } from 'react-navigation';

import styles from 'components/SearchResult/styles/result';
import tradeIcon from 'components/SearchResult/icons/trade.png';
import infoIcon from 'components/SearchResult/icons/info.png';

function Item({ result, input }) {
  const name = String(result.name);
  const inputIndex = name.indexOf(input);
  const inputLength = input.length;
  const navigation = useContext(NavigationContext);

  return (
    <View style={styles.itemContainer}>
      <View style={styles.firstLineContainer}>
        <View style={styles.nameContainer}>
          <Text style={styles.name}>{name.substr(0, inputIndex)}</Text>
          <Text style={styles.input}>{name.substr(inputIndex, inputLength)}</Text>
          <Text style={styles.name}>{name.substr(inputIndex + inputLength)}</Text>
        </View>
        <View style={styles.iconContainer}>
          <TouchableOpacity
            onPress={() =>
              navigation.navigate('TradeContainer', {
                detailTitle: name
                /* eslint-disable-next-line */
              })}
          >
            <Image source={tradeIcon} style={styles.tradeIcon} />
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() =>
              navigation.navigate('InstrumentDetail', {
                detailTitle: name
                /* eslint-disable-next-line */
              })}
          >
            <Image source={infoIcon} style={styles.infoIcon} />
          </TouchableOpacity>
        </View>
      </View>
      <View>
        <Text style={styles.fullName}>{result.fullName}</Text>
      </View>
    </View>
  );
}

Item.defaultProps = {
  result: {},
  input: ''
};

Item.propTypes = {
  result: PropTypes.shape({
    name: PropTypes.string,
    fullName: PropTypes.string,
    market: PropTypes.string
  }),
  input: PropTypes.string
};

export default Item;
