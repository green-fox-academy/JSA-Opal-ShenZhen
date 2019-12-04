import React, { useContext } from 'react';
import { View, Text, Image, TouchableOpacity } from 'react-native';
import { NavigationContext } from 'react-navigation';

import transIcon from 'assets/transformation-icon.jpg';
import infoIcon from 'assets/icons-info.png';
import presetProps from 'components/WatchList/presetProps';
import styles from './styles';

function InstrumentRow({ data }) {
  const navigation = useContext(NavigationContext);

  return (
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
      <TouchableOpacity onPress={() => navigation.navigate('InstrumentDetail')}>
        <Image style={styles.icon} source={infoIcon} />
      </TouchableOpacity>
    </View>
  );
}

InstrumentRow.defaultProps = {
  data: presetProps.defaultQuote
};

InstrumentRow.propTypes = {
  data: presetProps.quoteTypes
};

export default InstrumentRow;
