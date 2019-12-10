const pairs = {
  CHANGE_CURRENT_TRADE_ITEM: (state, action) => ({
    ...state,
    name: action.payload.name
  })
};

export default pairs;
