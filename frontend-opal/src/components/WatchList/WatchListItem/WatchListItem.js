import React from 'react';
import { View } from 'react-native';
import PropTypes from 'prop-types';

import SingleInstrument from 'components/WatchList/SingleInstrument/SingleInstrument';
import presetProps from 'components/WatchList/presetProps';
import styles from './styles';

const WatchListItem = ({ data, index }) => {
  return (
    <View style={styles.container}>
      {data.map(info => (
        <View key={`${info.symbol} item`}>
          <SingleInstrument data={info} index={index} />
        </View>
      ))}
    </View>
  );
};

WatchListItem.defaultProps = {
  data: [presetProps.defaultQuote],
  index: 0
};

WatchListItem.propTypes = {
  data: PropTypes.arrayOf(presetProps.quoteTypes),
  index: PropTypes.number
};

export default WatchListItem;
