const request = require('supertest');
const app = require('../app').default;
// const mongoose = require('mongoose');
const JSONEndPointsFile = require('../endpoints.json');
// const connection = require('../db/connection');
const db = require ('../db/connection.ts');

beforeAll((done) => {
    done();
});

afterAll(() => {
    // Closing the DB connection allows Jest to exit successfully.
    return db.close();
    
});

describe('GET /api', () => {
    test('status 200 - returns a JSON describing all available endpoints', async () => {
        const res = await request(app).get('/api').expect(200);
        expect(res.body).toEqual(JSONEndPointsFile);
    });
});
describe('GET /api/users', () => {
    test.only('status 200 - returns a JSON describing all available endpoints', async () => {
        return request(app).get('/api/users').expect(200);
        // expect(Array.isArray(res.body.users)).toBe(true);
        
    });
});
