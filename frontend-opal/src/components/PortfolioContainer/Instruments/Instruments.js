import React from 'react';
import { SafeAreaView, Text, FlatList } from 'react-native';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Card } from 'native-base';
import InstrumentsItem from './InstrumentsItem';
import styles from './styles';

const Instruments = ({ userPortfolioInfo, instrumentList }) => {
  console.log(userPortfolioInfo);

  return (
    <SafeAreaView style={styles.instrumentsArea}>
      <Card transparent>
        <Text style={styles.title}>Instruments</Text>
      </Card>
      <FlatList
        data={instrumentList}
        renderItem={({ item }) => <InstrumentsItem instrumentItem={item} />}
        keyExtractor={item => item.stockExchange + item.company}
      />
    </SafeAreaView>
  );
};

const mapStateToProps = state => ({
  instrumentList: state.portfolio.instrumentList,
  userPortfolioInfo: state.userPortfolioInfo
});

export default connect(mapStateToProps, null)(Instruments);

Instruments.defaultProps = {
  instrumentList: []
};

Instruments.propTypes = {
  instrumentList: PropTypes.arrayOf(
    PropTypes.shape({
      company: PropTypes.string,
      stockExchange: PropTypes.string
    })
  )
};
