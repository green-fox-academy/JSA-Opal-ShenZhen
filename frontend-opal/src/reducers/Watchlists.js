const pairs = {
  'GET_WATCHLIST_DATA': (state, action) => {return [...state, action.payload.data]}
};

function watchLists(state = {}, action) {
  if (action.type in pairs) return pairs[action.type](state, action);
  return state;
}

export default watchLists;
