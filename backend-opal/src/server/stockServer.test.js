jest.mock('./stockServer');
const stock = require('./stockServer');

describe('getStockByUser function', () => {
  it("returns an error for a stock doesn't exist", async () => {
    const stockData = await stock.getStockByUser(5);

    expect(stockData.error).not.toBeNull();
    expect(stockData.error).toBe('Stock item not found');
  });

  it('returns the stock item of a user that exists', async () => {
    const expectedStockData = [
      {
        id: 3,
        userID: 3,
        symbol: 'C',
        amount: 30
      }
    ];
    const stockData = await stock.getStockByUser(3);

    expect(stockData.data).not.toBeNull();
    expect(stockData.data).toEqual(expectedStockData);
  });
});
