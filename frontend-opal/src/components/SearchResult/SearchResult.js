import React from 'react';
import { View } from 'react-native';

import styles from './styles/index';

import ResultList from 'container/SearchResult/ResultList';

function Index() {
  return (
    <View style={styles.Index}>
      <ResultList />
    </View>
  );
}

export default Index;
