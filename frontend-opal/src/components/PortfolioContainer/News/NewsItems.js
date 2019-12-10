import React from 'react';
import { View, Text, Image } from 'react-native';
import PropTypes from 'prop-types';
import { Card, Button } from 'native-base';
import styles from './styles';

function NewsItems({ NewsItem }) {
  const { datetime, headline, image, source, url } = NewsItem;

  return (
    <View>
      <Card>
        <Text>{datetime}</Text>
      </Card>
    </View>
  );
}

export default NewsItems;
