import React from 'react';
import { StyleSheet, Text } from 'react-native';
import { Icon } from 'native-base';

import tools from 'components/common/tools';
import BackIcon from './BackIcon';

const styles = StyleSheet.create({
  listIcon: {
    marginLeft: tools.getPixel(30),
    color: 'white'
  },
  addButton: {
    marginRight: tools.getPixel(30),
    color: 'white'
  },
  title: {
    marginLeft: tools.getPixel(30),
    fontSize: tools.getPixel(16),
    color: 'white'
  }
});

function AddWatchList() {
  return <Icon name="md-add" style={styles.addButton} />;
}

const addDetailHeader = (component, title) => {
  /* eslint-disable-next-line */
  component.navigationOptions = {
    headerTitle: () => <Text style={styles.title}>{title}</Text>,
    headerLeft: () => <BackIcon prevPage="Portfolio" />,
    headerRight: () => <AddWatchList />
  };
};

export default addDetailHeader;
