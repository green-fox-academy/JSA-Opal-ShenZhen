import React from 'react';
import { View } from 'react-native';

import styles from './styles/index';

import ResultLists from '../../container/SearchResult/ResultLists';
import SearchHeader from '../../container/SearchResult/SearchHeader';

function Index() {
  return (
    <View style={styles.Index}>
      <SearchHeader />
      <ResultLists />
    </View>
  );
}

export default Index;
