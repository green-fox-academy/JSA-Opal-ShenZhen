import React from 'react';
import { View } from 'react-native';
import { Content, Container, Card, CardItem, Text } from 'native-base';
// import { KeyboardAvoidingView } from 'react-native-keyboard-aware-scroll-view'
import PropTypes from 'prop-types';
import StatisticDetail from './StatisticDetail';
import styles from '../styles';

const BidCard = ({ title }) => {
  return (
    <Content padder style={styles.secondCard}>
      <Card transparent>
        <Text style={styles.title}>{title}</Text>
      </Card>

      <Card>
        <View style={styles.detail}>
          <StatisticDetail />
        </View>
        <CardItem button onPress={() => alert('Your information has been sent to the bank')}>
          <Text>Submit</Text>
        </CardItem>
      </Card>
    </Content>
  );
};

BidCard.propTypes = {
  title: PropTypes.string
};

export default BidCard;
