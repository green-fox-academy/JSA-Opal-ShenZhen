import React from 'react';
import { View, Text, Image, TouchableOpacity, HorizontalFlatlistItem } from 'react-native';
import PropTypes from 'prop-types';
import { Card, CardItem } from 'native-base';
import { Linking } from 'expo';
import styles from './styles';

function NewsItems({ NewsItem }) {
  const { datetime, headline, image, source, url } = NewsItem;
  let datetimeConvert = new Date(datetime).toDateString();

  return (
    <TouchableOpacity onPress={() => Linking.openURL(url)}>
      <Card>
        <CardItem cardBody>
          <View style={styles.ImgContainer}>
            <Image style={styles.Img} source={{ uri: image }} />
          </View>
          <View style={styles.ImgTextContainer}>
            <Text style={styles.ImgText}>{datetimeConvert}</Text>
            <Text style={styles.ImgText}>Source: {source}</Text>
          </View>
        </CardItem>
        <CardItem>
          <Text>{headline}</Text>
        </CardItem>
      </Card>
    </TouchableOpacity>
  );
}

export default NewsItems;
