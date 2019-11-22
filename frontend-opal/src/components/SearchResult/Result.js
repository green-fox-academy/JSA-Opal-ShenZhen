import React from 'react';
import { FlatList } from 'react-native';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

import styles from 'components/SearchResult/styles/result';
import Item from 'components/SearchResult/Item';

function Result({ results, input }) {
  return (
    <FlatList
      data={results}
      renderItem={({ item }) => <Item result={item} input={input} />}
      keyExtractor={item => item.fullName}
      style={styles.container}
    />
  );
}

Result.defaultProps = {
  results: [],
  input: ''
};

Result.propTypes = {
  results: PropTypes.arrayOf(
    PropTypes.shape({
      name: PropTypes.string,
      fullName: PropTypes.string,
      market: PropTypes.string
    })
  ),
  input: PropTypes.string
};

const mapStateToProps = state => ({
  results: state.searchResult.results,
  input: state.searchResult.input
});

export default connect(mapStateToProps, null)(Result);
