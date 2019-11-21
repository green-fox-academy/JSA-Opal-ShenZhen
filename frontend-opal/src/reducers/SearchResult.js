const pairs = new Map();
pairs.set('SEARCH', search);

function searchResult(state = {}, action) {
  if (pairs.has(action.type)) return pairs.get(action.type)(state, action);
  return state;
}

function search(state, action) {
  return action.payload.results;
}

export default searchResult;
