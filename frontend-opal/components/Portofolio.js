import React from 'react';
import { View } from 'react-native';
import Header from './Header';
import PortfolioContainer from './PortfolioContainer'

export default function Portfolio() {
  return (
    <View>
      <Header />
      <PortfolioContainer />
    </View>
  );
}