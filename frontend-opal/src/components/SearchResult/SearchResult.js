import React from 'react';
import { View } from 'react-native';

import styles from './styles/index';

import ResultList from '../../container/SearchResult/ResultList';
import SearchHeader from '../../container/SearchResult/SearchHeader';

function Index() {
  return (
    <View style={styles.Index}>
      <SearchHeader />
      <ResultList />
    </View>
  );
}

export default Index;
