import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import { View } from 'react-native';
import { VictoryLegend, VictoryPie } from 'victory-native';
import styles from './styles';

const PieChart = ({ data, color, legendData }) => {
  const defaultPieDat = [
    { x: 'a', y: 0 },
    { x: 'b', y: 0 },
    { x: 'c', y: 100 }
  ];
  const defaultColor = ['#DFF1FD', '#DFF1FD', '#DFF1FD'];
  const [pieData, setPieData] = useState(defaultPieDat);
  const [pieColor, setPieColor] = useState(defaultColor);

  useEffect(() => {
    setPieData(data);
    setPieColor(color);
  }, []);

  return (
    <View style={styles.pieArea}>
      <View style={styles.legendArea}>
        <VictoryLegend
          animate={{ easing: 'exp', duration: 3000}}
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
          animate={{ easing: 'exp', duration: 3000 }}
          data={pieData}
          width={180}
          height={200}
          padding={10}
          colorScale={pieColor}
          labelRadius={() => 24 + 10}
          style={{ labels: { fill: 'white' } }}
          responsive={false}
        />
      </View>
    </View>
  );
};

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
