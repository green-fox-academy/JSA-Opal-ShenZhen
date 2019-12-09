import React from 'react';
import { View } from 'react-native';
import PropTypes from 'prop-types';

import SingleInstrument from 'components/WatchList/SingleInstrument/SingleInstrument';
import presetProps from 'components/WatchList/presetProps';
import animations from 'components/common/animations';
import styles from './styles';

const WatchListItem = ({ data, index }) => {
  return (
    <View style={styles.container}>
      <animations.FlyInInstruments data={data} index={index} Child={SingleInstrument} />
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
