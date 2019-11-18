import React from 'react';
import { View } from 'react-native';
import Header from './Header';
import Portfolio from './portfolio'

export default function OpalApp() {
  return (
    <View>
      <Header />
      <Portfolio />
    </View>
  );
}