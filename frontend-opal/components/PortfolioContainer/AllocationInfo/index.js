import React from 'react';
import PropTypes from 'prop-types';
import { View, Text, TouchableOpacity } from 'react-native';
import { Card } from 'native-base';
import styles from './styles';

import PieChart from '../PieChart'

const AllocationInfo = ({pieData, pieColor, legendData}) => {
    return (
      <View style={styles.allocationArea}>
        <Text style={styles.title}>Allocation</Text>

        <Card>
          <View style={styles.pie}>
            <PieChart
              data={pieData}
              color={pieColor}
              legendData={legendData}
            />
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
    )
}

AllocationInfo.propTypes = {
  pieData: PropTypes.objectOf(PropTypes.object).isRequired,
  pieColor: PropTypes.arrayOf(PropTypes.array).isRequired,
  legendData: PropTypes.objectOf(PropTypes.object).isRequired
}


export default AllocationInfo;

