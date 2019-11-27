import React from 'react';
import { View, Text } from 'react-native';
import {
  VictoryLine,
  VictoryChart,
  VictoryAxis,
  VictoryScatter,
  VictoryBrushContainer
} from 'victory-native';

import styles from './styles';

let InstrumentDetail = () => {
  const dataInstrument = [
    { ts: 'May', value: 2 },
    { ts: 'June', value: 4 },
    { ts: 'July', value: 6.5 },
    { ts: 'Aug', value: 6 },
    { ts: 'Sep', value: 5 },
    { ts: 'Oct', value: 7 },
    { ts: 'Nov', value: 9 }
  ];

  return (
    <View>
      <VictoryChart
        containerComponent={
          <VictoryBrushContainer
            brushDomain={{x: [0.2, 7.5], y: [-3, 9.5]}}
            brushDimension="y"
            brushStyle={{ fill: 'teal', opacity: 0.1 }}
          />
        }
      >
        <VictoryLine
          data={dataInstrument}
          style={{ data: { stroke: 'green' } }}
          y={data => data.value}
        />
        <VictoryScatter
          data={dataInstrument}
          y={data => data.value}
          size={3}
          style={{ data: { fill: 'green' } }}
        />
        <VictoryAxis
          tickValues={dataInstrument.map(item => item.ts)}
          style={{ axis: { stroke: 'none' } }}
        />
        <VictoryAxis style={{ axis: { stroke: 'none' } }} dependentAxis /> 
      </VictoryChart>
    </View>
  );
};

export default InstrumentDetail;
