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

export default {
  getWatchlistData,
  toggleOneInstrument
};
