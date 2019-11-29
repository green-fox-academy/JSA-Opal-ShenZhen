import React from 'react';
import PropTypes from 'prop-types';
import { CardItem, Button, Text } from 'native-base';
import styles from '../styles';

const IntervalFooter = ({ intervals }) => {
  const buttons = () =>
    intervals.map(item => (
      <Button transparent key={item.id}>
        <Text style={styles.footerText}>{item.val}</Text>
      </Button>
    ));

  return (
    <CardItem footer bordered style={styles.chartFooter}>
      {buttons(intervals)}
    </CardItem>
  );
};

IntervalFooter.propTypes = {
  intervals: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number,
      val: PropTypes.string
    })
  ).isRequired
};

export default IntervalFooter;
