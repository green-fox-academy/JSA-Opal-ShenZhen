import React from 'react';
import { View, Text, Image } from 'react-native';
import styles from './styles';

const WatchList2 = () => (
  <View>
    <View style={styles.border}>
      <Text>My WatchList2</Text>
      <Image style={styles.icon} source={require('../../assets/up.jpg')} />
    </View>
  </View>
);

export default WatchList2;
