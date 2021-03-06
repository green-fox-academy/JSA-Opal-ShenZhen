import React from 'react';
import { StyleSheet } from 'react-native';
import { Icon, Item, Input } from 'native-base';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

import tools from 'components/common/tools';
import thunks from 'thunks/searchResult';

const styles = StyleSheet.create({
  searchContainer: {
    width: tools.getPixel(240),
    borderBottomWidth: tools.getPixel(2),
    height: tools.getPixel(30)
  }
});

function SearchInput({ search }) {
  return (
    <Item searchBar style={styles.searchContainer}>
      <Icon name="search" style={{ color: 'white' }} />
      <Input
        placeholder="Search"
        style={{ color: 'white' }}
        onChange={e => search(e.nativeEvent.text)}
        autoFocus
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
    headerBackImage: () => <Icon name="md-arrow-back" style={{ color: 'white' }} />
  };
};

export default addSearchHeader;
