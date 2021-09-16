// import request from 'supertest';
const request = require('supertest');
const app = require('../app').default;

// import app from '../app';
// import JSONEndPointsFile from '../endpoints.json'
const JSONEndPointsFile = require('../endpoints.json');
const connection = require('../db/connection');

// connection.connectToServer((err: any, client: any) => {
//     if (err) console.log(err);

describe('GET /api', () => {
    test('status 200 - returns a JSON describing all available endpoints', async () => {
        const res = await request(app).get('/api').expect(200);
        expect(res.body).toEqual(JSONEndPointsFile);
    });
});
describe('GET /api/users', () => {
    test.only('status 200 - returns a JSON describing all available endpoints', async () => {
        const res = await request(app).get('/api/users').expect(200);
        // expect(res.body.endpoints).toEqual(JSONEndPointsFile);
        console.log(res.body);
    });
});
