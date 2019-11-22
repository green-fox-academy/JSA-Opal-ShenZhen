const pairs = {
  GET_WATCHLIST_DATA: (state, action) => {
    return [...state, action.payload.data];
  }
};

export default pairs;
