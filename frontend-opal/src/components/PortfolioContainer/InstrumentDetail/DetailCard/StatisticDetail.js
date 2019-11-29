import React from 'react';
import PropTypes from 'prop-types';
import { View } from 'react-native';
import { Text } from 'native-base';

import styles from '../styles';

const StatisticDetail = ({ data }) => {
  const colon = ':';
  const renderItems = items =>
    items.map(item => (
      <View key={item.id} style={styles.detailItem}>
        <Text style={styles.itemTitle}>
          {item.name}
          {colon}
        </Text>
        <Text style={styles.itemText}>{item.value}</Text>
      </View>
    ));

  return <View style={styles.detailSection}>{renderItems(data)}</View>;
};

StatisticDetail.propTypes = {
  data: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number,
      name: PropTypes.string,
      value: PropTypes.string,
      group: PropTypes.number
    })
  ).isRequired
};

export default StatisticDetail;
