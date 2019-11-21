import React from 'react';
import { View } from 'react-native';
import Header from './Header';
import PortfolioContainer from './PortfolioContainer';
import SearchResult from './search-result/SearchResult';

export default function Portfolio() {
  return (
    <View>
      <SearchResult />
    </View>
  );
}
