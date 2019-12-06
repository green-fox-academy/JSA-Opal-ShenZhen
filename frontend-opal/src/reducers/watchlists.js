const _ = require('lodash');

const pairs = {
  GET_WATCHLIST_DATA: (state, action) => {
    return action.payload.data;
  },
  TOGGLE_ONE_INSTRUMENT: (state, action) => {
    const copy = _.cloneDeep(state);
    copy.forEach((list, index) => {
      if (list.index === action.payload.index) {
        list.data.forEach((item, itemIndex) => {
          if (item.symbol === action.payload.symbol)
            copy[index].data[itemIndex].foldStatus = !copy[index].data[itemIndex].foldStatus;
        });
      }
    });
    return copy;
  },
  CLOSE_INSTRUMENT_IN_LIST: (state, action) => {
    const copy = _.cloneDeep(state);
    copy.forEach((list, index) => {
      if (list.index === action.payload.index) {
        list.data.forEach((item, itemIndex) => {
          copy[index].data[itemIndex].foldStatus = false;
        });
      }
    });
    return copy;
  }
};

export default pairs;
