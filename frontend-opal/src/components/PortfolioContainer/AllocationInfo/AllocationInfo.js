import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
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
        <TouchableOpacity>
          <Text style={styles.button}>SECTOR</Text>
        </TouchableOpacity>
        <TouchableOpacity>
          <Text style={styles.button}>GEOGRAPHY</Text>
        </TouchableOpacity>
      </View>
    </Card>
  </View>
);

const mapStateToProps = state => ({
  pieData: state.portfolio.pieData,
  pieColor: state.portfolio.pieColor,
  legendData: state.portfolio.legendData
});

export default connect(mapStateToProps, null)(AllocationInfo);

AllocationInfo.defaultProps = {
  pieData: [],
  pieColor: [],
  legendData: []
};

AllocationInfo.propTypes = {
  pieData: PropTypes.arrayOf(
    PropTypes.shape({
      x: PropTypes.string,
      y: PropTypes.number,
      label: PropTypes.string
    })
  ),
  pieColor: PropTypes.arrayOf(PropTypes.string),
  legendData: PropTypes.arrayOf(
    PropTypes.shape({
      name: PropTypes.string,
      symbol: PropTypes.objectOf(PropTypes.string)
    })
  )
};
