import React from 'react';
import { View, Text } from 'react-native';
import { VictoryLine, VictoryChart, VictoryTheme } from 'victory-native';

import presetProps from 'components/WatchList/presetProps';
import { FormatText } from 'components/WatchList/commonComponents';
import styles from './styles';

function ChartDetail({ data }) {
  const infoPairs = [
    { title: '52 wk low:', content: data.week52Low },
    { title: '52 wk high:', content: data.week52High },
    { title: 'P/E:', content: data.peRatio },
    { title: 'EPS:', content: data.eps },
    { title: 'Div. Yield', content: data.divYield }
  ];

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
        {infoPairs.map(info => (
          <View style={styles.lineContainer} key={`chartdetail text ${info.title}`}>
            <FormatText content={info.title} blockStyle={styles.alignLeft} />
            <FormatText content={info.content} blockStyle={styles.alignRight} />
          </View>
        ))}
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
