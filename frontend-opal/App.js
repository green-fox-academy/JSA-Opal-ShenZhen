import React from 'react';
import { View } from 'react-native';
import Header from './components/Header';
import Portfolio from './components/portfolio'

export default function App() {
  return (
    <View>
      <Header />
      <Portfolio />
    </View>
  );
}