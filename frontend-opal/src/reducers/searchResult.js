const pairs = {
  SEARCH: (state, action) => action.payload.results
};

function searchResult(state = {}, action) {
  if (action.type in pairs) return pairs[action.type](state, action);
  return state;
}

export default searchResult;
