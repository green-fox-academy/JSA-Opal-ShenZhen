import React from 'react';
import { StyleSheet, Text } from 'react-native';
import { Icon } from 'native-base';

import tools from 'components/common/tools';

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

const addDetailHeader = component => {
  /* eslint-disable-next-line */
  component.navigationOptions = ({ navigation }) => {
    return {
      headerTitle: () => <Text style={styles.title}>{navigation.getParam('detailTitle')}</Text>,
      headerRight: () => <AddWatchList />,
      headerBackImage: () => <Icon name="md-arrow-back" style={{ color: 'white' }} />
    };
  };
};

export default addDetailHeader;
