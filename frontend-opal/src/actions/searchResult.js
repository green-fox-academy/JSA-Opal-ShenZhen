const search = results => ({
  type: 'SEARCH',
  payload: {
    results
  }
});

const clearSearchResults = () => ({
  type: 'CLEAR_SEARCH_RESULT'
});

export default {
  search,
  clearSearchResults
};
