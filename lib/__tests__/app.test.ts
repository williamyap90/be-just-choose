// import request from 'supertest';
const request = require('supertest');
const app = require('../app');

// import app from '../app';
// import JSONEndPointsFile from '../endpoints.json'
const JSONEndPointsFile = require('../endpoints.json');
const connection = require('../db/connection');

// connection.connectToServer((err: any, client: any) => {
//     if (err) console.log(err);
  
describe('GET /api', () => {
    test('status 200 - returns a JSON describing all available endpoints', async () => {
        const response = await request(app).get('/api').expect(200);
        //console.log(JSON.parse(response.body));
        //expect(response.body).toEqual({ message: 'All OK - now try a proper route' });
        expect(response.body.endpoints).toEqual(JSONEndPointsFile);
    });
});
// });

