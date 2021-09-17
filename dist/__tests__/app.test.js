"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
const request = require('supertest');
const app = require('../app').default;
const mongoose = require('mongoose');
const JSONEndPointsFile = require('../endpoints.json');
const connection = require('../db/connection');
beforeAll((done) => {
    done();
});
afterAll((done) => {
    // Closing the DB connection allows Jest to exit successfully.
    mongoose.connection.close();
    done();
});
describe('GET /api', () => {
    test('status 200 - returns a JSON describing all available endpoints', () => __awaiter(void 0, void 0, void 0, function* () {
        const res = yield request(app).get('/api').expect(200);
        expect(res.body).toEqual(JSONEndPointsFile);
    }));
});
describe('GET /api/users', () => {
    test.only('status 200 - returns a JSON describing all available endpoints', () => __awaiter(void 0, void 0, void 0, function* () {
        const res = yield request(app).get('/api/users').expect(200);
        expect(Array.isArray(res.body)).toBe(true);
    }));
});
