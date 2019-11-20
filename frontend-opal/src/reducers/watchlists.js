const pairs = new Map();
pairs.set('GET_ALL_DATA', getAllData);

function watchLists(state = {}, action) {
  if (pairs.has(action.type)) return pairs.get(action.type)(state, action);
  return state;
}

function getAllData(state, action) {
  return action.payload.data;
}

export default watchLists;
