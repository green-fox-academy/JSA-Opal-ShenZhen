import React from 'react';
import { View, Text, Image } from 'react-native';

import transIcon from 'assets/transformation-icon.jpg';
import infoIcon from 'assets/icons-info.png';
import presetProps from 'components/WatchList/presetProps';
import styles from './styles';

const InstrumentRow = ({ data }) => (
  <View style={styles.info}>
    <Text style={styles.text}>{data.symbol}</Text>
    <Text style={styles.text}>{data.latestPrice}</Text>
    <Text style={Number(data.changePercent) >= 0 ? styles.greenfont : styles.redfont}>
      {`${data.changePercent}%`}
    </Text>
    <Text style={styles.text}>{data.marketCap}</Text>
    <View style={styles.text}>
      <Image style={styles.icon} source={transIcon} />
    </View>
    <Image style={styles.icon} source={infoIcon} />
  </View>
);

InstrumentRow.defaultProps = {
  data: presetProps.defaultQuote
};

InstrumentRow.propTypes = {
  data: presetProps.quoteTypes
};

export default InstrumentRow;
