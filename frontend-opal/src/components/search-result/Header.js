import React from 'react';
import { Header, Button, Icon, Left, Body, Right, Input, Item } from 'native-base';
import { connect } from 'react-redux';

import { styles } from './styles/header';
import thunks from 'thunks/searchResult';

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
          <Icon name="search" style={{color: 'white'}}/>
          <Input placeholder="Search" style={{color: 'white'}} onChange={e => search(e.nativeEvent.text)}/>
        </Item>
      </Body>
      <Right></Right>
    </Header>
  );
}

const mapDispatchToProps = dispatch => ({
  search: (input) => dispatch(thunks.search(input))
});

export default connect(null, mapDispatchToProps)(SearchHeader);
