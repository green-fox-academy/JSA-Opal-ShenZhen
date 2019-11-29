jest.mock('./db/driver');
const stockService = require('./stockService');

describe('stock service', () => {
  it("returns an error for a stock doesn't exist", async () => {
    const stockData = await stockService.getByUser(5);

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
    const stockData = await stockService.getByUser(3);

    expect(stockData.data).not.toBeNull();
    expect(stockData.data).toEqual(expectedStockData);
  });
});
