const pairs = {
  SEARCH: (state, action) => action.payload.results,
  CLEAR_SEARCH_RESULT: (state, action) => ({})
};

export default pairs;
