jest.mock('./stockService');
const request = require('supertest');
const server = require('../../server');

describe('Portfolio Endpoint', () => {
  it('no authorization, should get 401', async () => {
    const res = await request(server).get('/portfolio');
    expect(res.statusCode).toEqual(401);
  });
  it("authorization equals to 'token', should get 401", async () => {
    const res = await request(server)
      .get('/portfolio')
      .set('Authorization', 'token');
    expect(res.statusCode).toEqual(401);
  });
  it("authorization equals to 'Bearer', should get 403", async () => {
    const res = await request(server)
      .get('/portfolio')
      .set('Authorization', 'Bearer');
    expect(res.statusCode).toEqual(403);
  });
  it("authorization equals to 'Bearer token', should get 200 OK", async () => {
    const res = await request(server)
      .get('/portfolio')
      .set('Authorization', 'Bearer token');
    expect(res.statusCode).toEqual(200);
  });
  it('server of stock returns correcly response', async () => {
    const res = await request(server)
      .get('/portfolio')
      .set('Authorization', 'Bearer token');

    const { data } = res.body.portfolio;
    expect(data[0].userID).toEqual(1);
    expect(data[0].symbol).toEqual('A');
  });
});
