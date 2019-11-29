import React, { useContext } from 'react';
import { TouchableOpacity, Text, StyleSheet } from 'react-native';
import { NavigationContext } from 'react-navigation';

import tools from './common/tools';

const styles = StyleSheet.create({
  container: {
    width: '100%',
    height: '100%',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center'
  },
  start: {
    fontSize: tools.getPixel(36),
    color: 'rgb(77,119,245)'
  },
  your: {
    fontSize: tools.getPixel(36),
    color: 'rgb(77,119,245)'
  },
  investment: {
    fontSize: tools.getPixel(36),
    color: 'rgb(77,119,245)'
  }
});

function MainEntry() {
  const navigation = useContext(NavigationContext);

  return (
    <TouchableOpacity style={styles.container} onPress={() => navigation.navigate('Portfolio')}>
      <Text style={styles.start}>Start</Text>
      <Text style={styles.your}>Your</Text>
      <Text style={styles.investment}>Investment</Text>
    </TouchableOpacity>
  );
}

export default MainEntry;
