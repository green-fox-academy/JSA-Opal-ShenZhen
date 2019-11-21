import React from 'react';
import { View, FlatList, Text, Image } from 'react-native';
import { connect } from 'react-redux';

import styles from './styles/result';

function Item(props) {
  const name = props.result.name;
  const inputIndex = name.indexOf(props.input);
  const inputLength = props.input.length;

  return (
    <View style={styles.itemContainer}>
      <View style={styles.firstLineContainer}>
        <View style={styles.nameContainer}>
          <Text style={styles.name}>{name.substr(0, inputIndex)}</Text>
          <Text style={styles.input}>{name.substr(inputIndex, inputLength)}</Text>
          <Text style={styles.name}>{name.substr(inputIndex + inputLength)}</Text>
        </View>
        <View style={styles.iconContainer}>
          <Image source={require('./icons/trade.png')} style={styles.tradeIcon} />
          <Image source={require('./icons/info.png')} style={styles.infoIcon} />
        </View>
      </View>
      <View>
        <Text style={styles.fullName}>{props.result.fullName}</Text>
      </View>
    </View>
  );
}

function Result({ state }) {
  return (
    <FlatList
      data={state.results}
      renderItem={({ item }) => <Item result={item} input={state.input} />}
      keyExtractor={item => item.fullName}
      style={styles.container}
    />
  );
}

const mapStateToProps = state => ({
  state: state.searchResult
});

export default connect(mapStateToProps, null)(Result);
