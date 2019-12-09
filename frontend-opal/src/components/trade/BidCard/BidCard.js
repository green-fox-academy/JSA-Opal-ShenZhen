import React from 'react';
import { View} from 'react-native';
import { Content, Container, Card, CardItem, Text } from 'native-base';
// import { KeyboardAvoidingView } from 'react-native-keyboard-aware-scroll-view'

import StatisticDetail from './StatisticDetail';
import styles from '../styles';

const BidCard = ({title}) => {

  return (
    <Content  padder style={styles.secondCard}>
      <Card transparent>
      <Text style={styles.title}>{title}</Text>
      </Card>

      <Card>
        <View style={styles.detail}>
          <StatisticDetail/>
        </View>
        <CardItem button onPress={() => alert('Your information has been sent to the bank')}>
          <Text>Submit</Text>
        </CardItem>
      </Card>
    </Content>
  );
};

export default BidCard;
