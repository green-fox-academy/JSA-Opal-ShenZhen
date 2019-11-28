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
  it('request body missing part, should get 400 ', async () => {
    const postData = {
      id: 3,
      userId: 3,
      symbols: []
    };
    const res = await request(server)
      .post('/watchlists')
      .set('Authorization', 'Bearer token')
      .send(postData);

    expect(res.statusCode).toEqual(400);
    expect(res.body.error).toEqual('name is missing');
  });
  it("authorization equals to 'Bearere token', and body are valided, get '200 OK' ", async () => {
    const postData = {
      id: 3,
      userId: 3,
      name: 'My watchlist 3',
      symbols: []
    };
    const res = await request(server)
      .post('/watchlists')
      .set('Authorization', 'Bearer token')
      .send(postData);

    expect(res.statusCode).toEqual(200);
    expect(res.body.name).toEqual('My watchlist 3');
  });
});
