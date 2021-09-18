"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.seedDb = void 0;
const seed_1 = require("./seed");
const Schemas_1 = require("../../Schemas/Schemas");
const seedDb = () => {
    // mongoose.connect(dbURL);
    Schemas_1.User.collection.drop();
    //commented out event as doesn't exist yet
    // Event.collection.drop();
    Schemas_1.User.insertMany(seed_1.usersList)
        .then((user) => {
        // console.log(`${user.length} users seeded`);
    })
        .catch((err) => {
        console.log(err);
    });
    // .finally(() => {
    //     mongoose.connection.close();
    // });
};
exports.seedDb = seedDb;
