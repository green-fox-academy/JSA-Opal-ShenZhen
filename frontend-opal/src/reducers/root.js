import { combineReducers } from 'redux';

import watchListsPairs from './watchlists';
import searchResultPairs from './searchResult';

function setReducer(state, action, pairs) {
  if (action.type in pairs) return pairs[action.type](state, action);
  return state;
}

export default combineReducers({
  watchLists: (state = [], action) => setReducer(state, action, watchListsPairs),
  searchResult: (state = {}, action) => setReducer(state, action, searchResultPairs)
});
