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

function TabbedComponents({ components }) {
  return (
    <Tabs style={styles.tabs}>
      {components.map(Component => (
        <Tab
          heading={Component.title}
          key={Component.title}
          tabStyle={styles.tabStyle}
          textStyle={styles.textStyle}
          activeTabStyle={styles.activeTabStyle}
          activeTextStyle={styles.textStyle}
        >
          <Component />
        </Tab>
      ))}
    </Tabs>
  );
}

TabbedComponents.propTypes = {
  components: PropTypes.arrayOf(PropTypes.object).isRequired
};

export default TabbedComponents;
