const pairs = {
  GET_INSTRUMENT_DETAIL_DATA: (state, action) => action.payload.data,
  CLEAR_DETAIL_DATA: (state, action) => []
};

export default pairs;
