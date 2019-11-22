import { combineReducers } from 'redux';

import watchLists from './watchlists';
import searchResult from './searchResult';

export default combineReducers({
  watchLists,
  searchResult
});
