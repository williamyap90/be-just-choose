"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.seedDb = void 0;
const usersData_1 = require("../data/usersData");
const Schemas_1 = require("../../Schemas/Schemas");
// Seeding database for testing (no connection)
const seedDb = () => {
    Schemas_1.User.collection.drop();
    //commented out event as doesn't exist yet
    // Event.collection.drop();
    Schemas_1.User.insertMany(usersData_1.usersData)
        .then((user) => {
        // console.log(`${user.length} users seeded`);
    })
        .catch((err) => {
        console.log(err);
    });
};
exports.seedDb = seedDb;
