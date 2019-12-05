import React, { useContext } from 'react';
import { View } from 'react-native';
import { NavigationContext } from 'react-navigation';

import transIcon from 'assets/transformation-icon.jpg';
import infoIcon from 'assets/icons-info.png';
import presetProps from 'components/WatchList/presetProps';
import { FormatText, FormatTouchIcon } from 'components/WatchList/commonComponents';
import styles from './styles';

function InstrumentRow({ data }) {
  const navigation = useContext(NavigationContext);

  return (
    <View style={styles.info}>
      <FormatText content={data.symbol} blockStyle={styles.leftContainer} />
      <View style={styles.rightContainer}>
        <FormatText content={data.latestPrice} blockStyle={styles.alignRight} />
        <FormatText
          content={`${data.changePercent}%`}
          blockStyle={styles.alignRight}
          textStyle={Number(data.changePercent) >= 0 ? styles.greenfont : styles.redfont}
        />
        <FormatText content={data.marketCap} blockStyle={styles.alignRight} />
        <FormatTouchIcon
          iconStyle={styles.icon}
          iconSource={transIcon}
          blockStyle={styles.iconContainer}
        />
        <FormatTouchIcon
          iconStyle={styles.icon}
          iconSource={infoIcon}
          blockStyle={styles.iconContainer}
          func={() => navigation.navigate('InstrumentDetail')}
        />
      </View>
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
