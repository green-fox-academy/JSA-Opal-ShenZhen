const request = require('supertest');
const server = require('../../server');

describe('Watchlist Endpoint', () => {
  it('no authorization, should get 401', async () => {
    const res = await request(server).get('/watchlists');
    expect(res.statusCode).toEqual(401);
  });
  it("authorization equals to 'token', should get 401", async () => {
    const res = await request(server)
      .get('/watchlists')
      .set('Authorization', 'token');
    expect(res.statusCode).toEqual(401);
  });
  it("authorization equals to 'Bearer', should get 403", async () => {
    const res = await request(server)
      .get('/watchlists')
      .set('Authorization', 'Bearer');
    expect(res.statusCode).toEqual(403);
  });
  it("authorization equals to 'Bearer token', should get 200 OK", async () => {
    const res = await request(server)
      .get('/watchlists')
      .set('Authorization', 'Bearer token');
    expect(res.statusCode).toEqual(200);
  });
});