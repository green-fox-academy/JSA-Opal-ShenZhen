import React from 'react';
import PropTypes from 'prop-types';
import { View } from 'react-native';
import Svg from 'react-native-svg';
import { VictoryLegend, VictoryPie } from 'victory-native';

const PieChart = ({ data, color, legendData }) => (
  <View style={{ display: 'flex', flexDirection: 'row', justifyContent: 'space-around' }}>
    <Svg width={150} height={50} style={{ border: '1 px solid #ccc' }}>
      <VictoryLegend colorScale={color} x={30} y={40} data={legendData} responsive={false} />
    </Svg>

    <VictoryPie
      data={data}
      width={180}
      height={200}
      padding={{ left: 20, bottom: 20, top: 20 }}
      colorScale={color}
      labelRadius={() => 24 + 5}
      style={{ labels: { fill: 'white' } }}
      responsive={false}
    />
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
