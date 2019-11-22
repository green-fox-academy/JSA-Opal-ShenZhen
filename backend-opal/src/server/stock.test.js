jest.mock('./stock');
const stock = require('./stock');

describe('getStock function', () => {
  it("returns an error for a stock doesn't exist", async () => {
    const stockData = await stock.getStock(5);

    expect(stockData.error).not.toBeNull();
    expect(stockData.error).toBe('Stock item not found');
  });

  it('returns the stock item of a user that exists', async () => {
    const expectedStockData = [
      {
        id: 3,
        userID: 3,
        symbol: 'AAPL',
        amount: 300
      }
    ];
    const stockData = await stock.getStock(3);

    expect(stockData.data).not.toBeNull();
    expect(stockData.data).toEqual(expectedStockData);
  });
});
