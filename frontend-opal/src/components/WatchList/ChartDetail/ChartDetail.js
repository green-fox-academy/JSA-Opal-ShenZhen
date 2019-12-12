import React from 'react';
import { View } from 'react-native';
import {
  VictoryLine,
  VictoryChart,
  VictoryTheme,
  VictoryScatter,
  VictoryAxis
} from 'victory-native';

import presetProps from 'components/WatchList/presetProps';
import { FormatText } from 'components/WatchList/commonComponents';
import tools from 'components/common/tools';
import animations from 'components/common/animations';
import styles from './styles';

function ChartDetail({ data }) {
  const infoPairs = [
    { title: '52 wk low:', content: data.week52Low },
    { title: '52 wk high:', content: data.week52High },
    { title: 'P/E:', content: data.peRatio },
    { title: 'EPS:', content: data.eps },
    { title: 'Div. Yield', content: data.divYield }
  ];
  const xCheck = [];

  return (
    <animations.FlyInView style={styles.body} position={{ x: 0, y: -tools.getPixel(30) }}>
      <View style={styles.chartGraph}>
        <VictoryChart theme={VictoryTheme.material} width={240} height={160}>
          <VictoryLine
            animate={{ duration: 2000, onLoad: { duration: 2000 } }}
            style={{
              data: { stroke: 'rgb(250,110,59)' },
              parent: { border: '1px solid #cc' }
            }}
            data={data.chartData}
          />

          <VictoryScatter
            data={data.chartData}
            y={info => info.y}
            size={3}
            style={{ data: { fill: 'rgb(250,110,59)' } }}
          />

          <VictoryAxis
            tickValues={data.chartData.map(info => info.x)}
            tickFormat={t => {
              const month = String(t).split(' ')[0];
              if (xCheck.includes(month)) return '';
              xCheck.push(month);
              return month;
            }}
            style={{ axis: { stroke: 'none' } }}
          />
          <VictoryAxis dependentAxis style={{ axis: { stroke: 'none' } }} />
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
    </animations.FlyInView>
  );
}

ChartDetail.defaultProps = {
  data: presetProps.defaultQuote
};

ChartDetail.propTypes = {
  data: presetProps.quoteTypes
};

export default ChartDetail;
