import React from 'react';
import { SafeAreaView, Text, FlatList } from 'react-native';
import PropTypes from 'prop-types';
import InstrumentsItem from './InstrumentsItem';
import styles from './styles';

const Instruments = ({ InstrumentList }) => (
  <SafeAreaView style={styles.instrumentsArea}>
    <Text style={styles.title}>Instruments</Text>
    <FlatList
      data={InstrumentList}
      renderItem={({ item }) => (
        <InstrumentsItem InstrumentItem={item} />
      )}
      keyExtractor={(item) => item.stockExchange + item.company}
    />
  </SafeAreaView>
);

Instruments.propTypes = {
  InstrumentList: PropTypes.arrayOf(
    PropTypes.shape({
      company: PropTypes.string,
      stockExchange: PropTypes.string,
    }),
  ).isRequired,
};

export default Instruments;
