import React from 'react';
import { View } from 'react-native';
import { Content, Container, Card, CardItem, Text } from 'native-base';

import StatisticDetail from './StatisticDetail';
import DetailFooter from './DetailFooter';
import styles from '../styles';

import dataSample from '../dataSample';

const DetailCard = () => {
  const getDataGroup = (data, groupNum) => data.filter(item => item.group === groupNum);

  return (
    <Content padder style={styles.secondCard}>
      <Card transparent>
        <Text style={styles.title}>Details</Text>
      </Card>

      <Card>
        <View style={styles.detail}>
          <StatisticDetail data={getDataGroup(dataSample, 1)} />
          <StatisticDetail data={getDataGroup(dataSample, 2)} />
        </View>

        <DetailFooter />
      </Card>
    </Content>
  );
};

export default DetailCard;
