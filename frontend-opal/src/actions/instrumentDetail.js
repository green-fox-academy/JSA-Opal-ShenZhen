const getInstrumentDetailData = data => ({
  type: 'GET_INSTRUMENT_DETAIL_DATA',
  payload: {
    data
  }
});

const clearDetailData = () => ({
  type: 'CLEAR_DETAIL_DATA'
});

export default {
  getInstrumentDetailData,
  clearDetailData
};
