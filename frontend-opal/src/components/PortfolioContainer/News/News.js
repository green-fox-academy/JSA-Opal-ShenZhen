import React from 'react';
import { View, SafeAreaView, Text, FlatList, ScrollView } from 'react-native';
import PropTypes from 'prop-types';
import { Card, CardItem, Spinner, DeckSwiper, Content } from 'native-base';
import NewsItems from './NewsItems';
import styles from './styles';
import Item from '../../SearchResult/Item';
import { isTSBigIntKeyword } from '@babel/types';

const News = ({ getLatestNews }) => {
  const newsCards = items => items.map(item => <NewsItems key={item.url} newsItem={item} />);

  return (
    <Content>
      <SafeAreaView style={styles.newsArea}>
        {/* <Card transparent>
          <Text style={styles.title}>News</Text>
        </Card> */}
        {!getLatestNews[0] ? (
          <Spinner color="#e17055" />
        ) : (
          <ScrollView horizontal>{newsCards(getLatestNews)}</ScrollView>
        )}
      </SafeAreaView>
    </Content>
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
