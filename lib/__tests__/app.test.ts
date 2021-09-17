const request = require('supertest');
const app = require('../app').default;
const mongoose = require('mongoose');
const JSONEndPointsFile = require('../endpoints.json');
const db = require('../db/connection.ts');
const { seedDb } = require('../db/seeds/seedData');

beforeAll((done) => {
    seedDb();
    done();
});

afterAll(() => {
    return mongoose.disconnect();
});

describe('GET /api', () => {
    test('status 200 - returns a JSON describing all available endpoints', async () => {
        const res = await request(app).get('/api').expect(200);
        expect(res.body).toEqual(JSONEndPointsFile);
        expect(typeof res.body).toBe('object');
    });
    test('404: responds with custom error message when provided an invalid path', async () => {
        const res = await request(app).get('/api/notAPath').expect(404);
        expect(res.body.message).toBe('Invalid path');
    });
});
describe('GET /api/users', () => {
    test('status 200 - returns a list of the users', async () => {
        const res = await request(app).get('/api/users').expect(200);
        expect(Array.isArray(res.body.users)).toBe(true);
        res.body.users.forEach((user: any) => {
            expect(user).toHaveProperty('avatarUrl');
            expect(user).toHaveProperty('_id');
            expect(user).toHaveProperty('firstName');
            expect(user).toHaveProperty('lastName');
            expect(user).toHaveProperty('email');
            expect(user).toHaveProperty('eventHistory');
            expect(user).toHaveProperty('password');
        });
    });
});

describe('POST /api/users', () => {
    test('status 201 - returns with newly created user', async () => {
        const newUser = {
            firstName: 'Dave',
            lastName: 'David',
            email: 'dave@David.com',
            password: 'kjhfkjwhefkjwhefkj',
        };
        const res = await request(app)
            .post('/api/users')
            .send(newUser)
            .expect(201);
        expect(res.body.user).toHaveProperty('avatarUrl');
        expect(res.body.user).toHaveProperty('_id');
        expect(res.body.user).toHaveProperty('firstName');
        expect(res.body.user).toHaveProperty('lastName');
        expect(res.body.user).toHaveProperty('email');
        expect(res.body.user).toHaveProperty('eventHistory');
        expect(res.body.user).toHaveProperty('password');
        expect(res.body.user.firstName).toBe('Dave');
        expect(res.body.user.lastName).toBe('David');
        expect(res.body.user.email).toBe('dave@David.com');
        expect(res.body.user.password).toBe('kjhfkjwhefkjwhefkj');
    });
});
