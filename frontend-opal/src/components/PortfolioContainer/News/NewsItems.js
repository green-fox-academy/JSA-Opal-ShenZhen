import React, { useEffect } from 'react';
import { View, Text, Image, TouchableOpacity, HorizontalFlatlistItem } from 'react-native';
import PropTypes from 'prop-types';
import { Card, CardItem } from 'native-base';
import { Linking } from 'expo';
import styles from './styles';

function NewsItems({ newsItem }) {
  const { datetime, headline, image, source, url } = newsItem;
  const datetimeConvert = new Date(datetime).toDateString();
  const colon = ": ";

  const handleLinking = () => Linking.openURL(url);

  return (
    <View style={styles.newsCard}>
      <Card>
        <TouchableOpacity onPress={handleLinking}>
          <Image style={styles.Img} source={{ uri: image }} />
          <View style={styles.ImgTextContainer}>
            <Text style={styles.ImgText}>{datetimeConvert}</Text>
            {/* <Text style={styles.ImgText}>
              Source:
              {source}
            </Text> */}
            <Text style={styles.ImgText}>{source}{colon}{headline}</Text>
          </View>
        </TouchableOpacity>
      </Card>
    </View>
  );
}

export default NewsItems;

NewsItems.propTypes = {
  newsItem: PropTypes.shape({
    datetime: PropTypes.number,
    headline: PropTypes.string,
    image: PropTypes.string,
    source: PropTypes.string,
    url: PropTypes.string
  }).isRequired
};
