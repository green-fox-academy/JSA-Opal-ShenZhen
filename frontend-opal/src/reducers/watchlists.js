const pairs = {
  GET_ALL_DATA: (state, action) => action.payload.data,
};

function watchLists(state = {}, action) {
  if (action.type in pairs) return pairs[action.type](state, action);
  return state;
}

export default watchLists;
