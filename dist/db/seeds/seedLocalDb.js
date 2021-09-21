"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const usersData_1 = require("../data/usersData");
const eventsData_1 = require("../data/eventsData");
const Schemas_1 = require("../../Schemas/Schemas");
const mongoose_1 = __importDefault(require("mongoose"));
const connection_1 = require("../connection");
// Seeding local database (connection required)
const seedLocalDb = () => {
    const connect = mongoose_1.default.createConnection(connection_1.dbURL);
    connect.on('open', () => {
        connect.db
            .listCollections({ name: 'users' })
            .toArray((err, collection) => {
            if (err) {
                console.log(err);
                return;
            }
            if (collection.length > 0) {
                Schemas_1.User.collection.drop();
                console.log('Users collection dropped');
            }
            Schemas_1.User.insertMany(usersData_1.usersData)
                .then((user) => {
                console.log(`${user.length} users seeded`);
            })
                .catch((err) => {
                console.log(err);
            });
        });
        connect.db
            .listCollections({ name: 'events' })
            .toArray((err, collectionNames) => {
            if (err) {
                console.log(err);
                return;
            }
            if (collectionNames.length > 0) {
                Schemas_1.EventModel.collection.drop();
                console.log('Events collection dropped');
            }
            Schemas_1.EventModel.insertMany(eventsData_1.eventsData)
                .then((events) => {
                console.log(`${events.length} events seeded`);
            })
                .catch((err) => {
                console.log(err);
            });
        });
    });
};
seedLocalDb();
