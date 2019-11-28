import React from 'react';
import { CardItem, Button, Text } from 'native-base';
import styles from '../styles';

const IntervalFooter = ({ intervals }) => {
  const buttons = intervals =>
    intervals.map(item => (
      <Button transparent key={item.id}>
        <Text>{item.val}</Text>
      </Button>
    ));

  return (
    <CardItem footer bordered style={styles.chartFooter}>
      {buttons(intervals)}
    </CardItem>
  );
};

export default IntervalFooter;
