import React from 'react';
import { SafeAreaView, Text, FlatList } from 'react-native';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Card, CardItem, Spinner } from 'native-base';
// import GetLatestNews from './GetLatestNews';
// import NewsItems from './NewsItems';
// import styles from './styles';

const NewsCard = ({ portfolio, symbol }) => {
  let detail = portfolio.filter(instrument => instrument.symbol = symbol);
  return (
    <CardItem>
      {/* <SafeAreaView style={styles.newsArea}>
        <Card transparent>
          <Text style={styles.title}>News</Text>
        </Card>
        {!portfolio[0] ? (
          <Spinner color="#e17055" />
        ) : (
          <FlatList
            data={displayedNews}
            renderItem={({ item }) => <NewsItems NewsItem={item} />}
            keyExtractor={item => `${item.headline}`}
          />
        )}
      </SafeAreaView> */}
      <Text>fhdka</Text>
    </CardItem>
  );
};

const mapStateToProps = state => ({
  portfolio: state.portfolio
});

export default connect(mapStateToProps, null)(NewsCard);

NewsCard.defaultProps = {
  portfolio: []
};

NewsCard.propTypes = {
  portfolio: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number,
      user_id: PropTypes.number,
      symbol: PropTypes.string,
      amount: PropTypes.number,
      company: PropTypes.string,
      stockExchange: PropTypes.string,
      marketValue: PropTypes.number,
      profileImg: PropTypes.any,
      sector: PropTypes.string,
      news: PropTypes.any
    })
  )
};
