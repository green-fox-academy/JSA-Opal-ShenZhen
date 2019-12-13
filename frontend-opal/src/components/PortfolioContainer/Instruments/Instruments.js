import React from 'react';
import { SafeAreaView, Text, FlatList } from 'react-native';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Card, CardItem, Spinner, DeckSwiper, Container } from 'native-base';
import InstrumentsItem from './InstrumentsItem';
import styles from './styles';

const Instruments = ({ portfolio }) => {
  return (
    <CardItem>
      <SafeAreaView style={styles.instrumentsArea}>
        <Card transparent>
          <Text style={styles.title}>Instruments</Text>
        </Card>
        {!portfolio[0] ? (
          <Spinner color="#e17055" />
        ) : (
          <FlatList
            data={portfolio}
            renderItem={({ item }) => <InstrumentsItem instrumentItem={item} />}
            keyExtractor={item => `${item.id}`}
          />
        )}
      </SafeAreaView>
    </CardItem>
  );
};

const mapStateToProps = state => ({
  portfolio: state.portfolio
});

export default connect(mapStateToProps, null)(Instruments);

Instruments.defaultProps = {
  portfolio: []
};

Instruments.propTypes = {
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
