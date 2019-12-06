const getWatchlistData = data => ({
  type: 'GET_WATCHLIST_DATA',
  payload: {
    data
  }
});

const toggleOneInstrument = (index, symbol) => ({
  type: 'TOGGLE_ONE_INSTRUMENT',
  payload: {
    index,
    symbol
  }
});

const closeInstrumentsInList = index => ({
  type: 'CLOSE_INSTRUMENT_IN_LIST',
  payload: {
    index
  }
});

export default {
  getWatchlistData,
  toggleOneInstrument,
  closeInstrumentsInList
};
