import React from 'react';
import { Tab, Tabs } from 'native-base';
import { StyleSheet } from 'react-native';
import PropTypes from 'prop-types';

import tools from './tools';

const styles = StyleSheet.create({
  tabs: {
    zIndex: 10
  },
  tabStyle: {
    backgroundColor: 'white'
  },
  textStyle: {
    color: 'rgb(250,110,59)'
  },
  activeTabStyle: {
    backgroundColor: 'white',
    borderBottomWidth: tools.getPixel(2),
    borderBottomColor: 'rgb(250,110,59)'
  }
});

function AddTabs({ Cmpnts, names }) {
  return (
    <Tabs style={styles.tabs}>
      {Cmpnts.map((Cmpnt, index) => (
        <Tab
          heading={names[index]}
          key={names[index]}
          tabStyle={styles.tabStyle}
          textStyle={styles.textStyle}
          activeTabStyle={styles.activeTabStyle}
          activeTextStyle={styles.textStyle}
        >
          <Cmpnt />
        </Tab>
      ))}
    </Tabs>
  );
}

AddTabs.propTypes = {
  Cmpnts: PropTypes.arrayOf(PropTypes.object).isRequired,
  names: PropTypes.arrayOf(PropTypes.string).isRequired
};

export default AddTabs;
