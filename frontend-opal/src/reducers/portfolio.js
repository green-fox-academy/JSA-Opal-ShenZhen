const pairs = {
  GET_PORTFOLIO_DATA: (state, action) => {
    return [...state, action.payload.data];
  }
};

export default pairs;
