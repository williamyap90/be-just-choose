"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.seedDb = void 0;
const usersData_1 = require("../data/usersData");
const eventsData_1 = require("../data/eventsData");
const Schemas_1 = require("../../Schemas/Schemas");
const mongoose_1 = __importDefault(require("mongoose"));
const connection_1 = require("../connection");
// Seeding database for testing (no connection)
const seedDb = () => {
    const connect = mongoose_1.default.createConnection(connection_1.dbURL);
    connect.on('open', () => {
        connect.db
            // .listCollections() //searching for all collections
            .listCollections({ name: 'users' }) //searching for user collection
            .toArray((err, collection) => {
            console.log(collection, 'CL'); //log search result
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
                // console.log(`${user.length} users seeded`);
            })
                .catch((err) => {
                console.log(err);
            });
        });
        // Events check collection, drop if exists before inserting
        connect.db
            .listCollections({ name: 'events' })
            .toArray((err, collectionNames) => {
            if (err) {
                console.log(err);
                return;
            }
            if (collectionNames.length > 0) {
                Schemas_1.Event.collection.drop();
                console.log('Events collection dropped');
            }
            Schemas_1.Event.insertMany(eventsData_1.eventsData)
                .then((events) => {
                // console.log(`${events.length} events seeded`);
            })
                .catch((err) => {
                console.log(err);
            });
        });
    });
    //BELOW CODE IS FINE - check for collections before dropping
    // User.collection.drop();
    // Event.collection.drop();
    // User.insertMany(usersData)
    //     .then((user) => {
    //         // console.log(`${user.length} users seeded`);
    //     })
    //     .catch((err) => {
    //         console.log(err);
    //     });
    // Event.insertMany(eventsData)
    //     .then((events) => {
    //         console.log(`${events.length} events seeded`);
    //     })
    //     .catch((err) => {
    //         console.log(err);
    //     });
};
exports.seedDb = seedDb;
