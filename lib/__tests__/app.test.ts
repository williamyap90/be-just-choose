const request = require('supertest');
const app = require('../app').default;
const mongoose = require('mongoose');
const JSONEndPointsFile = require('../endpoints.json');
const db = require('../db/connection.ts');
const { seedDb } = require('../db/seeds/seedDb');
const { dbURL } = require('../db/connection');
const { User, EventModel } = require('../Schemas/Schemas');
// import { Event } from '../Schemas/Schemas';

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
            expect(typeof res.body.user.password).toBe('string');
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
            expect(typeof res.body.user.password).toBe('string');
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
    describe('GET /api/users/:email', () => {
        test('200: returns the user details ', async () => {
            const res = await request(app).get(
                '/api/users/rosaleekunde@test-jc.com'
            );
            expect(res.body.user).toHaveProperty('avatarUrl');
            expect(res.body.user).toHaveProperty('_id');
            expect(res.body.user).toHaveProperty('firstName');
            expect(res.body.user).toHaveProperty('lastName');
            expect(res.body.user).toHaveProperty('email');
            expect(res.body.user).toHaveProperty('eventHistory');
            expect(res.body.user).toHaveProperty('password');
            expect(res.body.user.firstName).toBe('Rosalee');
            expect(res.body.user.lastName).toBe('Kunde');
            expect(res.body.user.email).toBe('rosaleekunde@test-jc.com');
            expect(res.body.user.password).toBe('KF1J5ertKzske3e');
        });
    });
    describe('PATCH /api/users/:email', () => {
        test('200: returns the user with updated field ', async () => {
            const updateBody = {
                firstName: 'Doug',
            };
            const res = await request(app)
                .patch('/api/users/rosaleekunde@test-jc.com')
                .send(updateBody)
                .expect(200);
            expect(res.body.user).toHaveProperty('acknowledged');
            expect(res.body.user).toHaveProperty('modifiedCount');
            expect(res.body.user).toHaveProperty('matchedCount');
            expect(res.body.user.acknowledged).toBe(true);
            expect(res.body.user.modifiedCount).toBe(1);
            expect(res.body.user.matchedCount).toBe(1);

            const userCheck = await User.findOne({
                email: 'rosaleekunde@test-jc.com',
            });
            expect(userCheck).toHaveProperty('avatarUrl');
            expect(userCheck).toHaveProperty('_id');
            expect(userCheck).toHaveProperty('firstName');
            expect(userCheck).toHaveProperty('lastName');
            expect(userCheck).toHaveProperty('email');
            expect(userCheck).toHaveProperty('eventHistory');
            expect(userCheck).toHaveProperty('password');
            expect(userCheck.firstName).toBe('Doug');
        });
    });
    describe('POST /api/users/:email', () => {
        test('200: returns with the user successfully logged in', async () => {
            const newUser = {
                firstName: 'Abbbbb',
                lastName: 'Abbbbb',
                email: 'abcabc@abc.com',
                password: 'abcdefg',
            };
            const addNewUser = await request(app)
                .post('/api/users')
                .send(newUser)
                .expect(201);
            expect(addNewUser.body.user).toHaveProperty('avatarUrl');
            expect(addNewUser.body.user).toHaveProperty('_id');
            expect(addNewUser.body.user).toHaveProperty('firstName');
            expect(addNewUser.body.user).toHaveProperty('lastName');
            expect(addNewUser.body.user).toHaveProperty('email');
            expect(addNewUser.body.user).toHaveProperty('eventHistory');
            expect(addNewUser.body.user).toHaveProperty('password');
            expect(typeof addNewUser.body.user.password).toBe('string');

            const loginBody = {
                password: newUser.password,
            };
            const res = await request(app)
                .post('/api/users/abcabc@abc.com')
                .send(loginBody)
                .expect(200);
            expect(res.body.user).toHaveProperty('avatarUrl');
            expect(res.body.user).toHaveProperty('_id');
            expect(res.body.user).toHaveProperty('firstName');
            expect(res.body.user).toHaveProperty('lastName');
            expect(res.body.user).toHaveProperty('email');
            expect(res.body.user).toHaveProperty('eventHistory');
            expect(res.body.user).toHaveProperty('password');
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
    describe('GET /api/eventsbyorganiser/:organiser', () => {
        test('200: returns a list of the events', async () => {
            const res = await request(app)
                .get('/api/events/eventsbyorganiser/brayanbergnaum@test-jc.com')
                .expect(200);
            expect(Array.isArray(res.body.events)).toBe(true);
            expect(res.body.events).toHaveLength(2);
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
                restaurantList: [
                    {
                        restaurantName: 'Trove Cafe + Bakery',
                        categories: ['Bakeries', 'Cafes'],
                        displayAddress: [
                            '1032 Stockport Road',
                            'Levenshulme',
                            'Manchester M19 3WX',
                            'United Kingdom',
                        ],
                        coordinates: {
                            latitude: 53.441223,
                            longitude: -2.189375,
                        },
                        phoneNo: '+44 161 432 7184',
                        rating: 4.5,
                        price: '£',
                        reviewCount: 20,
                        imageUrl:
                            'https://s3-media1.fl.yelpcdn.com/bphoto/MSYzaWFPjYmnYtQQoctaag/o.jpg',
                        url: 'https://www.yelp.com/biz/trove-cafe-bakery-manchester?adjust_creative=NU9lAcDMMPSLSkTaTUlw-g&utm_campaign=yelp_api_v3&utm_medium=api_v3_business_search&utm_source=NU9lAcDMMPSLSkTaTUlw-g',
                    },
                ],
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
                eventName: 'Monday Madness',
                organiser: 'will@will.com',
                endDate: '2021-09-28T19:08:04.963Z',
                theme: 'Halloween',
                maxPeople: 150,
                restaurantList: [
                    {
                        restaurantName: 'Trove Cafe + Bakery',
                        categories: ['Bakeries', 'Cafes'],
                        displayAddress: [
                            '1032 Stockport Road',
                            'Levenshulme',
                            'Manchester M19 3WX',
                            'United Kingdom',
                        ],
                        coordinates: {
                            latitude: 53.441223,
                            longitude: -2.189375,
                        },
                        phoneNo: '+44 161 432 7184',
                        rating: 4.5,
                        price: '£',
                        reviewCount: 20,
                        imageUrl:
                            'https://s3-media1.fl.yelpcdn.com/bphoto/MSYzaWFPjYmnYtQQoctaag/o.jpg',
                        url: 'https://www.yelp.com/biz/trove-cafe-bakery-manchester?adjust_creative=NU9lAcDMMPSLSkTaTUlw-g&utm_campaign=yelp_api_v3&utm_medium=api_v3_business_search&utm_source=NU9lAcDMMPSLSkTaTUlw-g',
                    },
                ],
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
    describe('GET /api/events/:eventName', () => {
        test('200: responds with the event', async () => {
            const res = await request(app)
                // GET eventName or generated eventID?
                .get('/api/events/Fat+Friday!')
                .expect(200);
            expect(Array.isArray(res.body.event)).toBe(true);
            expect(res.body.event).toHaveLength(1);
            res.body.event.forEach((event: any) => {
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
                expect(event.eventName).toBe('Fat Friday!');
            });
        });
    });
    describe('GET /api/events/eventById/:eventId', () => {
        test('200: responds with the event', async () => {
            const newEvent = {
                eventName: 'MattsEvent',
                organiser: 'will@will.com',
                endDate: '2021-09-28T19:08:04.963Z',
                theme: 'Halloween',
                maxPeople: 150,
                restaurantList: [
                    {
                        restaurantName: 'Trove Cafe + Bakery',
                        categories: ['Bakeries', 'Cafes'],
                        displayAddress: [
                            '1032 Stockport Road',
                            'Levenshulme',
                            'Manchester M19 3WX',
                            'United Kingdom',
                        ],
                        coordinates: {
                            latitude: 53.441223,
                            longitude: -2.189375,
                        },
                        phoneNo: '+44 161 432 7184',
                        rating: 4.5,
                        price: '£',
                        reviewCount: 20,
                        imageUrl:
                            'https://s3-media1.fl.yelpcdn.com/bphoto/MSYzaWFPjYmnYtQQoctaag/o.jpg',
                        url: 'https://www.yelp.com/biz/trove-cafe-bakery-manchester?adjust_creative=NU9lAcDMMPSLSkTaTUlw-g&utm_campaign=yelp_api_v3&utm_medium=api_v3_business_search&utm_source=NU9lAcDMMPSLSkTaTUlw-g',
                    },
                ],
            };
            const addEvent = await new EventModel(newEvent).save();
            const findEvent = await EventModel.find({
                eventName: addEvent.eventName,
            });
            const res = await request(app)
                .get(`/api/events/eventById/${findEvent[0]._id.toString()}`)
                .expect(200);
            expect(Array.isArray(res.body.event)).toBe(true);
            expect(res.body.event).toHaveLength(1);
            res.body.event.forEach((event: any) => {
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
                expect(event.eventName).toBe('MattsEvent');
            });
        });
    });
    describe('PATCH /api/events/:eventName', () => {
        test('200: responds with the event with updated info', async () => {
            const updateBody = {
                isDraft: true,
            };
            const res = await request(app)
                .patch('/api/events/Fat+Friday!')
                .send(updateBody)
                .expect(200);
            expect(res.body.event).toHaveProperty('acknowledged');
            expect(res.body.event).toHaveProperty('modifiedCount');
            expect(res.body.event).toHaveProperty('matchedCount');
            expect(res.body.event.acknowledged).toBe(true);
            expect(res.body.event.modifiedCount).toBe(1);
            expect(res.body.event.matchedCount).toBe(1);
            const checkEvent = await EventModel.find({
                eventName: 'Fat Friday!',
            });
            expect(Array.isArray(checkEvent)).toBe(true);
            expect(checkEvent).toHaveLength(1);
            checkEvent.forEach((event: any) => {
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
                expect(event.eventName).toBe('Fat Friday!');
                expect(event.isDraft).toBe(true);
            });
        });
        test('200: responds with the event with updated votes on restaurant', async () => {
            const updateBody = {
                restaurantVotes: [
                    {
                        restaurantId: '61499a0648a24014ff7a86bd',
                        restaurantName: 'Trove Cafe + Bakery',
                        voteType: 'up',
                    },
                    {
                        restaurantId: '61499a0648a24014ff7a86bd',
                        restaurantName: 'The Magnet Freehouse',
                        voteType: 'up',
                    },
                ],
            };
            const res = await request(app)
                .patch('/api/events/Fat+Friday!')
                .send(updateBody)
                .expect(200);
            expect(res.body.event).toHaveProperty('acknowledged');
            expect(res.body.event).toHaveProperty('modifiedCount');
            expect(res.body.event).toHaveProperty('matchedCount');
            expect(res.body.event.acknowledged).toBe(true);
            expect(res.body.event.modifiedCount).toBe(1);
            expect(res.body.event.matchedCount).toBe(1);
            // const checkEvent = await EventModel.find({
            //     eventName: 'Fat Friday!',
            // });
            // console.log(
            //     checkEvent[0].restaurantList[0].upvotes,
            //     'PATCHEVENTNAME'
            // );
            // expect(checkEvent[0].restaurantList[0].upvotes).toBe(1);
        });
    });
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
