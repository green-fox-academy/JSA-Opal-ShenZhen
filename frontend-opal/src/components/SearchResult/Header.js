import React from 'react';
import { Header, Button, Icon, Left, Body, Right, Input, Item } from 'native-base';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

import thunks from 'thunks/searchResult';
import styles from './styles/header';

function SearchHeader({ search }) {
  return (
    <Header style={styles.container}>
      <Left>
        <Button transparent>
          <Icon name="arrow-back" />
        </Button>
      </Left>
      <Body>
        <Item searchBar style={styles.searchContainer}>
          <Icon name="search" style={{ color: 'white' }} />
          <Input
            placeholder="Search"
            style={{ color: 'white' }}
            onChange={e => search(e.nativeEvent.text)}
          />
        </Item>
      </Body>
      <Right />
    </Header>
  );
}

SearchHeader.propTypes = {
  search: PropTypes.func.isRequired
};

const mapDispatchToProps = dispatch => ({
  search: input => dispatch(thunks.search(input))
});

export default connect(null, mapDispatchToProps)(SearchHeader);
