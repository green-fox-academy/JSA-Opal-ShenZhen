const getWatchlistData = data => ({
  type: 'GET_WATCHLIST_DATA',
  payload: {
    data
  }
});

export default {
  getWatchlistData
};
