import { combineReducers } from 'redux';

import watchListsPairs from './watchlists';
import searchResultPairs from './searchResult';
import portfolioPairs from './portfolio';
import tradePairs from './trade';
import instrumentDetailPairs from './instrumentDetail';

function setReducer(state, action, pairs) {
  if (action.type in pairs) return pairs[action.type](state, action);
  return state;
}

export default combineReducers({
  watchlists: (state = [], action) => setReducer(state, action, watchListsPairs),
  searchResult: (state = {}, action) => setReducer(state, action, searchResultPairs),
  trade: (state = {}, action) => setReducer(state, action, tradePairs),
  portfolio: (state = [], action) => setReducer(state, action, portfolioPairs),
  instrumentDetail: (state = {}, action) => setReducer(state, action, instrumentDetailPairs)
});
