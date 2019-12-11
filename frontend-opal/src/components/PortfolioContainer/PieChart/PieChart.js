import React from 'react';
import PropTypes from 'prop-types';
import { View } from 'react-native';
import { VictoryLegend, VictoryPie } from 'victory-native';
import styles from './styles';

const PieChart = ({ data, color, legendData }) => (
  <View style={styles.pieArea}>
    <View style={styles.legendArea}>
      <VictoryLegend
        colorScale={color}
        x={5}
        y={30}
        height={200}
        data={legendData}
        responsive={false}
      />
    </View>

    <View style={styles.chartArea}>
      <VictoryPie
        data={data}
        width={140}
        height={160}
        padding={10}
        colorScale={color}
        labelRadius={() => 24 + 10}
        style={{ labels: { fill: 'white' } }}
        responsive={false}
      />
    </View>
  </View>
);

PieChart.propTypes = {
  data: PropTypes.arrayOf(
    PropTypes.shape({
      x: PropTypes.string,
      y: PropTypes.number,
      label: PropTypes.string
    })
  ).isRequired,
  color: PropTypes.arrayOf(PropTypes.string).isRequired,
  legendData: PropTypes.arrayOf(
    PropTypes.shape({
      name: PropTypes.string,
      symbol: PropTypes.objectOf(PropTypes.string)
    })
  ).isRequired
};

export default PieChart;
