import React from 'react';
import { Tab, Tabs } from 'native-base';
import { StyleSheet } from 'react-native';
import BuyContainer from 'components/trade/BuyContainer';
import SellContainer from 'components/trade/SellContainer';

const styles = StyleSheet.create({
  tabs: {
    zIndex: 10
  },
  tabBarUnderlineStyle: {
    backgroundColor: 'rgb(250,110,59)'
  },
  tabStyle: {
    backgroundColor: 'white'
  },
  textStyle: {
    color: 'rgb(250,110,59)'
  },
  activeTabStyle: {
    backgroundColor: 'white'
  }
});

function TabbedComponents() {
  return (
    <Tabs style={styles.tabs} tabBarUnderlineStyle={styles.tabBarUnderlineStyle}>
      <Tab
        heading="buy"
        key="1"
        tabStyle={styles.tabStyle}
        textStyle={styles.textStyle}
        activeTabStyle={styles.activeTabStyle}
        activeTextStyle={styles.textStyle}
      >
        <BuyContainer />
      </Tab>

      <Tab
        heading="sell"
        key="sell"
        tabStyle={styles.tabStyle}
        textStyle={styles.textStyle}
        activeTabStyle={styles.activeTabStyle}
        activeTextStyle={styles.textStyle}
      >
        <SellContainer />
      </Tab>
    </Tabs>
  );
}

export default TabbedComponents;
