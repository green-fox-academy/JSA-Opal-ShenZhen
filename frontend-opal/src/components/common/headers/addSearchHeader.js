import React, { useContext } from 'react';
import { StyleSheet } from 'react-native';
import { Icon, Item, Input } from 'native-base';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { NavigationContext } from 'react-navigation';

import tools from 'components/common/common';
import thunks from 'thunks/searchResult';

const styles = StyleSheet.create({
  searchContainer: {
    width: tools.getPixel(240),
    borderBottomWidth: tools.getPixel(2),
    height: tools.getPixel(30)
  },
  backIcon: {
    color: 'white',
    marginLeft: tools.getPixel(20)
  }
});

function BackIcon() {
  const navigation = useContext(NavigationContext);

  return (
    <Icon
      name="md-arrow-back"
      style={styles.backIcon}
      onPress={() => navigation.navigate('Portfolio')}
    />
  );
}

function SearchInput({ search }) {
  return (
    <Item searchBar style={styles.searchContainer}>
      <Icon name="search" style={{ color: 'white' }} />
      <Input
        placeholder="Search"
        style={{ color: 'white' }}
        onChange={e => search(e.nativeEvent.text)}
      />
    </Item>
  );
}

SearchInput.propTypes = {
  search: PropTypes.func.isRequired
};

const mapDispatchToProps = dispatch => ({
  search: input => dispatch(thunks.search(input))
});

const ReduxSearchInput = connect(null, mapDispatchToProps)(SearchInput);

const addSearchHeader = component => {
  /* eslint-disable-next-line */
  component.navigationOptions = {
    headerTitle: () => <ReduxSearchInput />,
    headerLeft: () => <BackIcon />
  };
};

export default addSearchHeader;
