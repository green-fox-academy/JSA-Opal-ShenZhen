const changeCurrentTradItem = name => ({
  type: 'CHANGE_CURRENT_TRADE_ITEM',
  payload: {
    name
  }
});

export default {
  changeCurrentTradItem
};
