import React from 'react';
import { View, Text } from 'react-native';
import { VictoryLine, VictoryChart, VictoryTheme } from 'victory-native';

import presetProps from 'components/WatchList/presetProps';
import styles from './styles';

function ChartDetail({ data }) {
  return (
    <View style={styles.body} key={`${data.symbol} detail`}>
      <View>
        <VictoryChart theme={VictoryTheme.material} width={250} height={200}>
          <VictoryLine
            style={{
              data: { stroke: '#c43a31' },
              parent: { border: '1px solid #cc' }
            }}
            data={data.chartData}
          />
        </VictoryChart>
      </View>
      <View style={styles.chartinfo}>
        <Text>{`52 wk low: ${data.week52Low}`}</Text>
        <Text>{`52 wk high: ${data.week52High}`}</Text>
        <Text>{`P/E: ${data.peRatio}`}</Text>
        <Text>{`EPS: ${data.eps}`}</Text>
        <Text>{`Div. Yield: ${data.divYield}`}</Text>
      </View>
    </View>
  );
}

ChartDetail.defaultProps = {
  data: presetProps.defaultQuote
};

ChartDetail.propTypes = {
  data: presetProps.quoteTypes
};

export default ChartDetail;
