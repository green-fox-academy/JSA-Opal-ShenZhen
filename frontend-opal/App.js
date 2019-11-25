import React, { useState, useEffect } from 'react';
import { StyleSheet, View } from 'react-native';

import * as Font from 'expo-font';
import { Ionicons } from 'react-native-vector-icons';
import { AppLoading } from 'expo'; import WatchListContainer from './components/WatchListContainer/WatchListContainer';


export default function App() {
  const [isReady, setReady] = useState(false);
  const fontFunc = async () => {
    await Font.loadAsync({
      Roboto: require('./node_modules/native-base/Fonts/Roboto.ttf'),
      Roboto_medium: require('./node_modules/native-base/Fonts/Roboto_medium.ttf'),
      ...Ionicons.font,
    });
    setReady(true);
  };
  useEffect(fontFunc, {});

  if (!isReady) {
    return <AppLoading />;
  }

  return (
    <View style={styles.container}>
      <WatchListContainer />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    marginTop: 25,
  },
});
