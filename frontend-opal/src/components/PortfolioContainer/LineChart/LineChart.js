import React from 'react';
import { View } from 'react-native';
import { VictoryLine, VictoryChart, VictoryAxis, VictoryScatter } from 'victory-native';
import PropTypes from 'prop-types';

const LineChart = ({ data }) => {
  return (
    <View>
      <VictoryChart
        padding={{ top: 10, left: 60, right: 50, bottom: 30 }}
        height={180}
        scale={{ x: 'time' }}
      >
        <VictoryLine
          animate={{ duration: 2000, onLoad: { duration: 2000 } }}
          style={{
            data: { stroke: 'tomato' }
          }}
          data={data}
        />

        <VictoryScatter
          data={data}
          y={yData => yData.y}
          size={3}
          style={{ data: { fill: 'teal' } }}
        />

        <VictoryAxis
          style={{ axis: { stroke: 'none' } }}
          tickValues={data.map(point => point.x)}
          /* eslint-disable-next-line */
          tickFormat={(t, index) => {
            if (index === 0 || index === 4 || index === 7) return t;
          }}
        />
        <VictoryAxis style={{ axis: { stroke: 'none' } }} dependentAxis />
      </VictoryChart>
    </View>
  );
};

LineChart.defaultProps = {
  data: []
};

LineChart.propTypes = {
  data: PropTypes.arrayOf(
    PropTypes.shape({
      x: PropTypes.string,
      y: PropTypes.number
    })
  )
};

export default LineChart;
