import React from 'react';
import { View, Text, Image } from 'react-native';
import { VictoryLine, VictoryChart, VictoryTheme } from 'victory-native';
import Svg from 'react-native-svg';
import styles from './styles';

const WatchList1 = () => {
  const data = {
    '52 wk low': '231.6',
    '52 wk high': '250.7',
    'P/E': '20.3',
    EPS: '1.2',
    DivYield: '2.34%',
  };

  const info = [{
    name: 'MSFT', num: '141.21', increase: '+0.23', whole: '1.2M',
  },
  {
    name: 'AMZN', num: '2108.2', increase: '-0.06', whole: '609K',
  },
  {
    name: 'AAPL', num: '250.7', increase: '+1.63', whole: '810K',
  }];

  const renderItems = (infos) => (
    infos.map((info) => (
      <View key={info.name} style={styles.info}>
        <Text style={styles.text}>{info.name}</Text>
        <Text style={styles.text}>{info.num}</Text>
        <Text style={Number(info.increase) >= 0 ? styles.greenfont : styles.redfont}>
          {info.increase}
%
        </Text>
        <Text style={styles.text}>{info.whole}</Text>
        <View style={styles.text}><Image style={styles.icon} source={require('../../assets/transformation-icon.jpg')} /></View>
        <Image style={styles.icon} source={require('../../assets/icons-info.png')} />
      </View>
    )));

  return (
    <View>
      <View style={styles.border}>
        <Text>My WatchList1</Text>
        <Image style={styles.icon} source={require('../../assets/down.png')} />
      </View>
      {renderItems(info)}
      <View style={styles.body}>
        <View>
          <VictoryChart theme={VictoryTheme.material} width={250} height={200}>
            <VictoryLine
              style={{
                data: { stroke: '#c43a31' },
                parent: { border: '1px solid #cc' },
              }}

              data={[
                { x: 1, y: 2 },
                { x: 2, y: 3 },
                { x: 3, y: 5 },
              ]}
            />
          </VictoryChart>
        </View>
        <View style={styles.chartinfo}>
          <Text>
52 wk high :
            {data['52 wk high']}
          </Text>
          <Text>
52 wk low :
            {data['52 wk low']}
          </Text>
          <Text>
P/E :
            {data['P/E']}
          </Text>
          <Text>
EPS :
            {data.EPS}
          </Text>
          <Text>
DivYield :
            {data.DivYield}
          </Text>
        </View>
      </View>
    </View>
  );
};

export default WatchList1;
