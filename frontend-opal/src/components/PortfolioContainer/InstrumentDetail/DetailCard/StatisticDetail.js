import React from 'react';
import { View } from 'react-native';
import { Container, CardItem, Body, Text } from 'native-base';

import styles from '../styles';

const StatisticDetail = ({ data }) => {
  const renderItems = items =>
    items.map(item => (
      <View key={item.id} style={styles.detailItem}>
        <Text style={styles.itemText}>{item.name}:</Text>
        <Text style={styles.itemText}>{item.value}</Text>
      </View>
    ));

  return <View>{renderItems(data)}</View>;
};

export default StatisticDetail;
