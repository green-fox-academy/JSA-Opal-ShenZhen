import React, { useContext } from 'react';
import { Text, StyleSheet } from 'react-native';
import { Icon } from 'native-base';
import { NavigationContext } from 'react-navigation';
import { connect } from 'react-redux';

import tools from 'components/common/tools';
import actions from 'actions/searchResult';

const styles = StyleSheet.create({
  listIcon: {
    marginLeft: tools.getPixel(30),
    color: 'white'
  },
  searchButton: {
    marginRight: tools.getPixel(30),
    color: 'white'
  },
  title: {
    marginLeft: tools.getPixel(30),
    fontSize: tools.getPixel(16),
    color: 'white'
  }
});

function SearchIcon({ clearSearchResults }) {
  const navigation = useContext(NavigationContext);

  return (
    <Icon name="search" style={styles.searchButton} onPress={() => {clearSearchResults();navigation.navigate('Search')}} />
  );
}

const ReduxSearchIcon = connect(null, (dispatch) => ({
  clearSearchResults: () => dispatch(actions.clearSearchResults())
}))(SearchIcon);

function ListIcon() {
  const navigation = useContext(NavigationContext);

  return (
    <Icon name="list" style={styles.listIcon} onPress={() => navigation.navigate('MainEntry')} />
  );
}

const addListHeader = (component, title = 'Investments') => {
  /* eslint-disable-next-line */
  component.navigationOptions = {
    headerTitle: () => <Text style={styles.title}>{title}</Text>,
    headerLeft: () => <ListIcon />,
    headerRight: () => <ReduxSearchIcon />
  };
};

export default addListHeader;
