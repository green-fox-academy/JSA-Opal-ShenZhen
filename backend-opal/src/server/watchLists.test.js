jest.mock('./watchListService');
const request = require('supertest');
const server = require('../../server');

describe('Watchlist Endpoint', () => {
  it('no authorization, should get 401', async () => {
    const res = await request(server).get('/watchlists/1');
    expect(res.statusCode).toEqual(401);
  });
  it("authorization equals to 'token', should get 401", async () => {
    const res = await request(server)
      .get('/watchlists/1')
      .set('Authorization', 'token');
    expect(res.statusCode).toEqual(401);
  });
  it("authorization equals to 'Bearer', should get 403", async () => {
    const res = await request(server)
      .get('/watchlists/1')
      .set('Authorization', 'Bearer');
    expect(res.statusCode).toEqual(403);
  });
  it("authorization equals to 'Bearer token', should get 200 OK", async () => {
    const res = await request(server)
      .get('/watchlists/1')
      .set('Authorization', 'Bearer token');
    expect(res.statusCode).toEqual(200);
  });
});
