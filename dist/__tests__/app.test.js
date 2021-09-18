'use strict';
var __awaiter =
    (this && this.__awaiter) ||
    function (thisArg, _arguments, P, generator) {
        function adopt(value) {
            return value instanceof P
                ? value
                : new P(function (resolve) {
                      resolve(value);
                  });
        }
        return new (P || (P = Promise))(function (resolve, reject) {
            function fulfilled(value) {
                try {
                    step(generator.next(value));
                } catch (e) {
                    reject(e);
                }
            }
            function rejected(value) {
                try {
                    step(generator['throw'](value));
                } catch (e) {
                    reject(e);
                }
            }
            function step(result) {
                result.done
                    ? resolve(result.value)
                    : adopt(result.value).then(fulfilled, rejected);
            }
            step(
                (generator = generator.apply(thisArg, _arguments || [])).next()
            );
        });
    };
const request = require('supertest');
const app = require('../app').default;
const mongoose = require('mongoose');
const JSONEndPointsFile = require('../endpoints.json');
const db = require('../db/connection.ts');
const { seedDb } = require('../db/seeds/seedData');
const { dbURL } = require('../db/connection');
beforeAll(() => {
    mongoose.connect(dbURL);
    seedDb();
});
afterAll(() => {
    return mongoose.disconnect();
});
describe('GET /api', () => {
    test('status 200 - returns a JSON describing all available endpoints', () =>
        __awaiter(void 0, void 0, void 0, function* () {
            const res = yield request(app).get('/api').expect(200);
            expect(res.body).toEqual(JSONEndPointsFile);
            expect(typeof res.body).toBe('object');
        }));
    test('404: responds with custom error message when provided an invalid path', () =>
        __awaiter(void 0, void 0, void 0, function* () {
            const res = yield request(app).get('/api/notAPath').expect(404);
            expect(res.body.message).toBe('Invalid path');
        }));
});
describe('GET /api/users', () => {
    test('status 200 - returns a list of the users', () =>
        __awaiter(void 0, void 0, void 0, function* () {
            const res = yield request(app).get('/api/users').expect(200);
            expect(Array.isArray(res.body.users)).toBe(true);
            res.body.users.forEach((user) => {
                expect(user).toHaveProperty('avatarUrl');
                expect(user).toHaveProperty('_id');
                expect(user).toHaveProperty('firstName');
                expect(user).toHaveProperty('lastName');
                expect(user).toHaveProperty('email');
                expect(user).toHaveProperty('eventHistory');
                expect(user).toHaveProperty('password');
            });
        }));
});
describe('POST /api/users', () => {
    test('status 201 - returns with newly created user', () =>
        __awaiter(void 0, void 0, void 0, function* () {
            const newUser = {
                firstName: 'Dave',
                lastName: 'David',
                email: 'dave@David.com',
                password: 'kjhfkjwhefkjwhefkj',
            };
            const res = yield request(app)
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
        }));
    test('status 201: responds with the newly created category and ignores unnecessary properties', () =>
        __awaiter(void 0, void 0, void 0, function* () {
            const newUser = {
                firstName: 'Tom',
                lastName: 'Thomas',
                email: 'tom@tomtom.com',
                password: 'tommytomtom',
                age: 34,
                favouriteColour: 'blue',
            };
            const res = yield request(app)
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
        }));
    xtest('status 400 responds with an error required fields are missing', () =>
        __awaiter(void 0, void 0, void 0, function* () {
            const newUser = {
                // lastName & password required fields missing
                firstName: 'Scotty',
                email: 'scotty@2hotty.com',
            };
            const res = yield request(app)
                .post('/api/users')
                .send(newUser)
                .expect(400);
            // todo - test needs to be finished & validation completed
        }));
});
