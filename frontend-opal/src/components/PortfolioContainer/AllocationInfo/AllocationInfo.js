import React from 'react';
import PropTypes from 'prop-types';
import { View, Text, TouchableOpacity } from 'react-native';
import { Card } from 'native-base';
import styles from './styles';

import PieChart from '../PieChart';

const AllocationInfo = ({ pieData, pieColor, legendData }) => (
  <View style={styles.allocationArea}>
    <Text style={styles.title}>Allocation</Text>

    <Card>
      <View style={styles.pie}>
        <PieChart data={pieData} color={pieColor} legendData={legendData} />
      </View>

      <View style={styles.allocationButtons}>
        <TouchableOpacity onPress={() => console.log('button pressed')}>
          <Text style={styles.button}>SECTOR</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => console.log('button pressed')}>
          <Text style={styles.button}>GEOGRAPHY</Text>
        </TouchableOpacity>
      </View>
    </Card>
  </View>
);

AllocationInfo.propTypes = {
  pieData: PropTypes.arrayOf(
    PropTypes.shape({
      x: PropTypes.string,
      y: PropTypes.number,
      label: PropTypes.string
    })
  ).isRequired,
  pieColor: PropTypes.arrayOf(PropTypes.string).isRequired,
  legendData: PropTypes.arrayOf(
    PropTypes.shape({
      name: PropTypes.string,
      symbol: PropTypes.objectOf(PropTypes.string)
    })
  ).isRequired
};

export default AllocationInfo;
