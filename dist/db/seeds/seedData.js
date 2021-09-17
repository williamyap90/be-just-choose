"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const seed_1 = require("./seed");
// const db = require('../connection');///
// const mongoose = require('mongoose');
const mongoose_1 = __importDefault(require("mongoose"));
const connection_1 = require("../connection");
const Schemas_1 = require("../../Schemas/Schemas");
mongoose_1.default.connect(connection_1.dbURL);
Schemas_1.User.collection.drop();
Schemas_1.Event.collection.drop();
Schemas_1.User.create(seed_1.usersList)
    .then((user) => {
    console.log(`${user.length} users seeded`);
})
    .catch((err) => {
    console.log(err);
})
    .finally(() => {
    mongoose_1.default.connection.close();
});
