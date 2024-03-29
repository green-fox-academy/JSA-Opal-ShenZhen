jest.mock('./db/driver');
const watchListService = require('./watchListService');

describe('watchlist service', () => {
  it("returns an error for a watchlist doesn't exist", async () => {
    const watchlistData = await watchListService.getWatchLists(3);

    expect(watchlistData.error).not.toBeNull();
  });

  it('returns the watchlist item of a user that exists', async () => {
    const expectedWatchListData = [
      {
        id: 3,
        user_id: 3,
        name: 'C',
        symbols: 'p,q'
      }
    ];
    const watchlistData = await watchListService.getWatchLists(3);
    expect(watchlistData.data).not.toBeNull();
    expect(watchlistData.data).toEqual(expectedWatchListData);
  });
});
