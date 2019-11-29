import React from 'react';
import { View } from 'react-native';
import { VictoryLine, VictoryChart, VictoryAxis, VictoryScatter } from 'victory-native';

import dataSample from './dataSample';

const InstrumentDetail = () => {
  const formatAxisMonth = date => {
    const options = { month: 'short' };
    return new Intl.DateTimeFormat('en-US', options).format(date);
  };

  return (
    <View>
      <VictoryChart
        padding={{ top: 10, left: 50, right: 50, bottom: 30 }}
        height={200}
        scale={{ x: 'time' }}
      >
        <VictoryLine
          style={{
            data: { stroke: 'tomato' }
          }}
          data={dataSample}
        />

        <VictoryScatter
          data={dataSample}
          y={data => data.y}
          size={3}
          style={{ data: { fill: 'teal' } }}
        />

        <VictoryAxis
          style={{ axis: { stroke: 'none' } }}
          tickValues={[new Date(2019, 5, 1), new Date(2019, 8, 1), new Date(2019, 11, 1)]}
          tickFormat={x => formatAxisMonth(new Date(x))}
        />
        <VictoryAxis style={{ axis: { stroke: 'none' } }} dependentAxis />
      </VictoryChart>
    </View>
  );
};

export default InstrumentDetail;
