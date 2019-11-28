import React from 'react';
import { View } from 'react-native';
import { Content, Text, Card, CardItem } from 'native-base';

import LineChart from '../LineChart';
import PerformanceFooter from './PerformanceFooter';
import styles from '../styles';

const PerformanceCard = () => {
  const intervals = [
    { id: 1, val: '1D' },
    { id: 2, val: '2D' },
    { id: 3, val: '1W' },
    { id: 4, val: '1M' },
    { id: 5, val: '6M' },
    { id: 6, val: '1Y' },
    { id: 7, val: '5Y' }
  ];

  return (
    <Content padder style={styles.firstCard}>
      <Card transparent>
        <Text style={styles.title}>Performance</Text>
      </Card>

      <Card>
        <CardItem cardBody>
          <LineChart />
        </CardItem>

        <PerformanceFooter intervals={intervals} />
      </Card>
    </Content>
  );
};

export default PerformanceCard;
