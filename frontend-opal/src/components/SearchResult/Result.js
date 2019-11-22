import React from 'react';
import {
  View, FlatList, Text, Image,
} from 'react-native';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

import styles from './styles/result';
import tradeIcon from './icons/trade.png';
import infoIcon from './icons/info.png';

function Item({ result, input }) {
  const name = String(result.name);
  const inputIndex = name.indexOf(input);
  const inputLength = input.length;

  return (
    <View style={styles.itemContainer}>
      <View style={styles.firstLineContainer}>
        <View style={styles.nameContainer}>
          <Text style={styles.name}>{name.substr(0, inputIndex)}</Text>
          <Text style={styles.input}>{name.substr(inputIndex, inputLength)}</Text>
          <Text style={styles.name}>{name.substr(inputIndex + inputLength)}</Text>
        </View>
        <View style={styles.iconContainer}>
          <Image source={tradeIcon} style={styles.tradeIcon} />
          <Image source={infoIcon} style={styles.infoIcon} />
        </View>
      </View>
      <View>
        <Text style={styles.fullName}>{result.fullName}</Text>
      </View>
    </View>
  );
}

function Result({ state }) {
  return (
    <FlatList
      data={state.results}
      renderItem={({ item }) => <Item result={item} input={state.input} />}
      keyExtractor={(item) => item.fullName}
      style={styles.container}
    />
  );
}

Result.propTypes = {
  state: PropTypes.shape({
    results: PropTypes.arrayOf(
      PropTypes.shape({
        name: PropTypes.string,
        fullName: PropTypes.string,
        market: PropTypes.string,
      }),
    ),
    input: PropTypes.string,
  }).isRequired,
};

Item.defaultProps = {
  result: [],
};

Item.propTypes = {
  result: PropTypes.arrayOf(
    PropTypes.shape({
      name: PropTypes.string,
      fullName: PropTypes.string,
      market: PropTypes.string,
    }),
  ),
  input: PropTypes.string.isRequired,
};

const mapStateToProps = (state) => ({
  state: state.searchResult,
});

export default connect(mapStateToProps, null)(Result);
