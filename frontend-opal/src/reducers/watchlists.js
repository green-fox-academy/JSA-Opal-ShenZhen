const pairs = new Map();
pairs.set('GET_ALL_DATA', (state, action) => action.payload.data);

function watchLists(state = {}, action) {
  if (pairs.has(action.type)) return pairs.get(action.type)(state, action);
  return state;
}

export default watchLists;
