import React from 'react';
import { Content, Text, CardItem, Icon, Right } from 'native-base';

import styles from '../styles';

const DetailFooter = () => {
  return (
    <CardItem style={styles.DetailFooter}>
      <Icon name="heart" />
      <Icon name="share" />
      <Icon name="bookmark" />
    </CardItem>
  );
};

export default DetailFooter;
