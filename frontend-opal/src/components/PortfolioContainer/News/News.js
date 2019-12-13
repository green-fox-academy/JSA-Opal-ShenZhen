import React from 'react';
import { SafeAreaView, Text, FlatList } from 'react-native';
import PropTypes from 'prop-types';
import { Card, CardItem, Spinner, Content } from 'native-base';
import NewsItems from './NewsItems';
import styles from './styles';

const News = ({ getLatestNews }) => {
  return (
    <CardItem>
      <SafeAreaView style={styles.newsArea}>
        <Card transparent>
          <Text style={styles.title}>News</Text>
        </Card>
        {!getLatestNews[0] ? (
          <Spinner color="#e17055" />
        ) : (
          <FlatList
            data={getLatestNews}
            renderItem={({ item }) => <NewsItems NewsItem={item} />}
            keyExtractor={item => `${item.headline}`}
          />
        )}
      </SafeAreaView>
    </CardItem>
  );
};

export default News;

News.defaultProps = {
  getLatestNews: []
};

News.propTypes = {
  getLatestNews: PropTypes.arrayOf(
    PropTypes.shape({
      datetime: PropTypes.number,
      headline: PropTypes.string,
      image: PropTypes.string,
      source: PropTypes.string,
      url: PropTypes.string
    }).isRequired
  )
};
