import { combineReducers } from 'redux';

import watchLists from './Watchlists';
import searchResult from './SearchResult';

export default combineReducers({
  watchLists,
  searchResult,
});
