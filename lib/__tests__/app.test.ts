const request = require('supertest');
const app = require('../app').default;
const mongoose = require('mongoose');
const JSONEndPointsFile = require('../endpoints.json');
const db = require('../db/connection.ts');
const { seedDb } = require('../db/seeds/seedDb');
const { dbURL } = require('../db/connection');

beforeAll(() => {
    mongoose.connect(dbURL);
    seedDb();
});
afterAll(() => {
    return mongoose.disconnect();
});

describe('API', () => {
    describe('GET /api', () => {
        test('200: returns a JSON describing all available endpoints', async () => {
            const res = await request(app).get('/api').expect(200);
            expect(res.body).toEqual(JSONEndPointsFile);
            expect(typeof res.body).toBe('object');
        });
        test('404: responds with custom error message when provided an invalid path', async () => {
            const res = await request(app).get('/api/notAPath').expect(404);
            expect(res.body.message).toBe('Invalid path');
        });
    });
});
describe('USERS', () => {
    describe('GET /api/users', () => {
        test('200: returns a list of the users', async () => {
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
        test('201: returns with newly created user', async () => {
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
        test('201: responds with the newly created user and ignores unnecessary properties', async () => {
            const newUser = {
                firstName: 'Tom',
                lastName: 'Thomas',
                email: 'tom@tomtom.com',
                password: 'tommytomtom',
                age: 34,
                favouriteColour: 'blue',
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
            expect(res.body.user).not.toHaveProperty('age');
            expect(res.body.user).not.toHaveProperty('favouriteColour');
            expect(res.body.user.firstName).toBe('Tom');
            expect(res.body.user.lastName).toBe('Thomas');
            expect(res.body.user.email).toBe('tom@tomtom.com');
            expect(res.body.user.password).toBe('tommytomtom');
        });
        test('400: responds with an error required fields are missing', async () => {
            const newUser = {
                // lastName & password required fields missing
                firstName: 'Scotty',
                email: 'scotty@2hotty.com',
            };
            const res = await request(app)
                .post('/api/users')
                .send(newUser)
                .expect(400);
            expect(res.body.message).toBe(
                'User validation failed: lastName: Path `lastName` is required., password: Path `password` is required.'
            );
        });
    });
});
describe('EVENTS', () => {
    describe('GET /api/events', () => {
        test('200: returns a list of the events', async () => {
            const res = await request(app).get('/api/events').expect(200);
            expect(Array.isArray(res.body.events)).toBe(true);
            res.body.events.forEach((event: any) => {
                expect(typeof event).toBe('object');
                expect(event).toHaveProperty('_id');
                expect(event).toHaveProperty('winningRestaurant');
                expect(event).toHaveProperty('eventName');
                expect(event).toHaveProperty('eventURL');
                expect(event).toHaveProperty('dateCreated');
                expect(event).toHaveProperty('organiser');
                expect(event).toHaveProperty('isDraft');
                expect(event).toHaveProperty('endDate');
                expect(event).toHaveProperty('voters');
                expect(event).toHaveProperty('restaurantList');
            });
        });
    });
    describe('POST /api/events', () => {
        test('201: responds with the newly created event', async () => {
            const newEvent = {
                eventName: 'Monday Madness',
                organiser: 'will@will.com',
                endDate: '2021-09-28T19:08:04.963Z',
                //restaurantList
            };
            const res = await request(app)
                .post('/api/events')
                .send(newEvent)
                .expect(201);
            expect(res.body.event).toHaveProperty('_id');
            expect(res.body.event).toHaveProperty('winningRestaurant');
            expect(res.body.event).toHaveProperty('eventName');
            expect(res.body.event).toHaveProperty('eventURL');
            expect(res.body.event).toHaveProperty('dateCreated');
            expect(res.body.event).toHaveProperty('organiser');
            expect(res.body.event).toHaveProperty('isDraft');
            expect(res.body.event).toHaveProperty('endDate');
            expect(res.body.event).toHaveProperty('voters');
            expect(res.body.event).toHaveProperty('restaurantList');
        });
        test('201: responds with the newly created event and ignores unnecessary properties', async () => {
            const newEvent = {
                eventName: 'Thirsty Tuesday',
                organiser: 'ammar@ammar.am',
                endDate: '2021-10-01T11:00:04.963Z',
                theme: 'Halloween',
                maxPeople: 150,
            };
            const res = await request(app)
                .post('/api/events')
                .send(newEvent)
                .expect(201);
            expect(res.body.event).toHaveProperty('_id');
            expect(res.body.event).toHaveProperty('winningRestaurant');
            expect(res.body.event).toHaveProperty('eventName');
            expect(res.body.event).toHaveProperty('eventURL');
            expect(res.body.event).toHaveProperty('dateCreated');
            expect(res.body.event).toHaveProperty('organiser');
            expect(res.body.event).toHaveProperty('isDraft');
            expect(res.body.event).toHaveProperty('endDate');
            expect(res.body.event).toHaveProperty('voters');
            expect(res.body.event).toHaveProperty('restaurantList');
            expect(res.body.event).not.toHaveProperty('theme');
            expect(res.body.event).not.toHaveProperty('maxPeople');
        });
    });
    //PATCH (partial update keeping msising fields)
});
describe('RESTAURANTS', () => {
    describe('GET /api/restaurants', () => {
        test('200: returns a list of restaurants', async () => {
            const response = await request(app)
                .get(
                    '/api/restaurants?location=Manchester&radius=5000&limit=10&sort_by=distance&price=1,2&offset=0'
                )
                .expect(200);
            expect(typeof response.body).toBe('object');
        });
    });
});
