import React from 'react';
import { View, Text, Image } from 'react-native';
import PropTypes from 'prop-types';

import transIcon from 'assets/transformation-icon.jpg';
import infoIcon from 'assets/icons-info.png';
import styles from './styles';

const infoItems = ({ infos }) => (
  <View>
    {infos.map(info => (
      <View key={info.name} style={styles.info}>
        <Text style={styles.text}>{info.name}</Text>
        <Text style={styles.text}>{info.num}</Text>
        <Text style={Number(info.increase) >= 0 ? styles.greenfont : styles.redfont}>
          {`${info.increase}%`}
        </Text>
        <Text style={styles.text}>{info.whole}</Text>
        <View style={styles.text}>
          <Image style={styles.icon} source={transIcon} />
        </View>
        <Image style={styles.icon} source={infoIcon} />
      </View>
    ))}
  </View>
);

infoItems.propTypes = {
  infos: PropTypes.arrayOf(
    PropTypes.shape({
      name: PropTypes.string,
      num: PropTypes.string,
      increase: PropTypes.string,
      whole: PropTypes.string
    })
  ).isRequired
};

export default infoItems;