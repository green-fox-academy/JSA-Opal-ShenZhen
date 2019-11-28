import React from 'react';
import { View, Text } from 'react-native';
import { VictoryLine, VictoryChart, VictoryTheme } from 'victory-native';
import PropTypes from 'prop-types';
import styles from './styles';

const ChartDetail = ({ chartData, stockData }) => {
  return (
    <View>
      <View style={styles.body}>
        <View>
          <VictoryChart theme={VictoryTheme.material} width={250} height={200}>
            <VictoryLine
              style={{
                data: { stroke: '#c43a31' },
                parent: { border: '1px solid #cc' }
              }}
              data={chartData}
            />
          </VictoryChart>
        </View>
        <View style={styles.chartinfo}>
          {stockData.map(item => (
            <Text key={item.name}>
              {item.name}:{item.value}
            </Text>
          ))}
        </View>
      </View>
    </View>
  );
};

ChartDetail.propTypes = {
  chartData: PropTypes.arrayOf(
    PropTypes.shape({
      x: PropTypes.number,
      y: PropTypes.number
    })
  ).isRequired,
  stockData: PropTypes.arrayOf(PropTypes.any).isRequired
};

export default ChartDetail;
