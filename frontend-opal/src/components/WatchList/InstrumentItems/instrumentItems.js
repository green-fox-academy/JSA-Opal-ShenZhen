import React, { useContext } from 'react';
import { View, Text, Image, TouchableOpacity } from 'react-native';
import PropTypes from 'prop-types';
import { NavigationContext } from 'react-navigation';
import thunks from 'thunks/showtrade';
import { connect } from 'react-redux';

import transIcon from 'assets/transformation-icon.jpg';
import infoIcon from 'assets/icons-info.png';
import styles from './styles';

const infoItems = ({ infos, tradeName }) => {
  const navigation = useContext(NavigationContext);

  return (
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
            <TouchableOpacity
              onPress={() => {
                tradeName(info.name);
                navigation.navigate('TradeContainer');
              }}
            >
              <Image style={styles.icon} source={transIcon} />
            </TouchableOpacity>
          </View>
          <Image style={styles.icon} source={infoIcon} />
        </View>
      ))}
    </View>
  );
};

const mapDispatchToProps = dispatch => {
  return {
    tradeName: name => dispatch(thunks.showTradeName(name))
  };
};

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

export default connect(null, mapDispatchToProps)(infoItems);
