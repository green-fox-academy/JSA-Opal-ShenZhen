import React from 'react';
import { SafeAreaView, ScrollView } from 'react-native';
import Header from './Header';
import PortfolioContainer from './PortfolioContainer';

export default function Portfolio() {
  return (
    <SafeAreaView>
      <ScrollView>
        <Header />
        <PortfolioContainer />
      </ScrollView>
    </SafeAreaView>
  );
}
