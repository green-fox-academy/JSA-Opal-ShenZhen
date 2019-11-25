import React from 'react';
import { View } from 'react-native';

import styles from './styles/index';
import SearchHeader from './Header';
import Result from './Result';

function Index() {
  return (
    <View style={styles.Index}>
      <SearchHeader />
      <Result />
    </View>
  );
}

export default Index;
