import React from 'react';
import { View, Text } from 'react-native';
import {
  VictoryLine,
  VictoryChart,
  VictoryAxis,
  VictoryScatter,
  VictoryBrushContainer,
  VictoryZoomContainer
} from 'victory-native';

import styles from '../styles';

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

  // return (
  //   <View>

  return (
    <View>
      <VictoryChart
        padding={{ top: 0, left: 50, right: 50, bottom: 30 }}
        height={200}
        scale={{ x: 'time' }}
        containerComponent={
          <VictoryBrushContainer
            responsive={false}
            brushDimension="x"
            // brushDomain={this.state.selectedDomain}
            // onBrushDomainChange={this.handleBrush.bind(this)}
            brushStyle={{ fill: 'teal', opacity: 0.1 }}
          />
        }
      >
        <VictoryLine
          style={{
            data: { stroke: 'tomato' }
          }}
          data={[
            { x: new Date(1982, 4, 1), y: 125 },
            { x: new Date(1987, 5, 1), y: 257 },
            { x: new Date(1993, 6, 1), y: 345 },
            { x: new Date(1997, 7, 1), y: 515 },
            { x: new Date(2001, 8, 1), y: 132 },
            { x: new Date(2005, 9, 1), y: 305 },
            { x: new Date(2011, 10, 1), y: 270 },
            { x: new Date(2015, 11, 1), y: 470 }
          ]}
        />

        <VictoryAxis
          tickValues={[
            new Date(1985, 4, 1),
            // new Date(1990, 5, 1),
            new Date(1995, 6, 1),
            // new Date(2000, 7, 1),
            new Date(2005, 8, 1),
            // new Date(2010, 9, 1)
          ]}
          tickFormat={x => new Date(x).getFullYear()}
        />
        <VictoryAxis style={{ axis: { stroke: 'none' } }} dependentAxis />
      </VictoryChart>
    </View>
  );
};

{
  /* <VictoryChart
        containerComponent={
          <VictoryBrushContainer
            // brushDomain={{ x: [-2, 7.5], y: [-1, 8] }}
            // brushDimension="y"
            brushStyle={{ fill: 'teal', opacity: 0.1 }}
          />
        }
        responsive={false}
      >
        <VictoryLine
          with={100}
          height={100}
          data={dataInstrument}
          style={{ data: { stroke: 'green' } }}
          y={data => data.value}
          responsive={false}
        /> */
}
{
  /* <VictoryScatter
          data={dataInstrument}
          y={data => data.value}
          size={3}
          style={{ data: { fill: 'green' } }}
        /> */
}
{
  /* <VictoryAxis
          tickValues={dataInstrument.map(item => item.ts)}
          style={{ axis: { stroke: 'none' } }}
        />
        <VictoryAxis style={{ axis: { stroke: 'none' } }} dependentAxis /> */
}
{
  /* </VictoryChart> */
}
{
  /* </View> */
}
// );
// };

export default InstrumentDetail;
