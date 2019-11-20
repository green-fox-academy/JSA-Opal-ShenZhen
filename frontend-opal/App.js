import React from 'react';
import { StyleSheet, View } from 'react-native';
import WatchList1 from './components/WatchList1/index';
import WatchList2 from './components/WachList2/index';
import Header from './components/Header2/index';


export default class App extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <Header />
        <WatchList1 />
        <WatchList2 />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    marginTop: 25,
  },
});
