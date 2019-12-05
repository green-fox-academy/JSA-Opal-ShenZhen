import React from 'react';
import { SafeAreaView, Text, FlatList } from 'react-native';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Card } from 'native-base';
import InstrumentsItem from './InstrumentsItem';
import styles from './styles';

const Instruments = ({ fetchPortfolio }) => {
  return (
    <SafeAreaView style={styles.instrumentsArea}>
      <Card transparent>
        <Text style={styles.title}>Instruments</Text>
      </Card>
      <FlatList
        data={fetchPortfolio}
        renderItem={({ item }) => <InstrumentsItem instrumentItem={item} />}
        keyExtractor={item => `${item.id}`}
      />
    </SafeAreaView>
  );
};

const mapStateToProps = state => ({
  fetchPortfolio: state.fetchPortfolio.instruments
});

export default connect(mapStateToProps, null)(Instruments);

Instruments.defaultProps = {
  fetchPortfolio: []
};

Instruments.propTypes = {
  fetchPortfolio: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number,
      user_id: PropTypes.number,
      symbol: PropTypes.string,
      amount: PropTypes.number,
      company: PropTypes.string,
      stockExchange: PropTypes.string,
      marketValue: PropTypes.number,
      profileImg: PropTypes.any,
      sector: PropTypes.string
    })
  )
};
