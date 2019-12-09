import React from 'react';
import { View } from 'react-native';

import ResultList from 'container/SearchResult/ResultList';
import styles from './styles/index';

function Index() {
  return (
    <View style={styles.Index}>
      <ResultList />
    </View>
  );
}

export default Index;
