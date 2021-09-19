"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const usersData_1 = require("../data/usersData");
const Schemas_1 = require("../../Schemas/Schemas");
const mongoose_1 = __importDefault(require("mongoose"));
const connection_1 = require("../connection");
// Seeding local database (connection required)
const seedLocalDb = () => {
    mongoose_1.default.connect(connection_1.dbURL);
    Schemas_1.User.collection.drop();
    //commented out event as doesn't exist yet
    // Event.collection.drop();
    Schemas_1.User.insertMany(usersData_1.usersData)
        .then((user) => {
        console.log(`${user.length} users seeded`);
    })
        .catch((err) => {
        console.log(err);
    })
        .finally(() => {
        mongoose_1.default.connection.close();
    });
};
seedLocalDb();
