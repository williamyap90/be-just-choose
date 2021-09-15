"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const mongodb_1 = require("mongodb");
const dotenv_1 = __importDefault(require("dotenv"));
dotenv_1.default.config();
let dbURL;
if (!process.env.DATABASE_URL) {
    throw new Error('No database set');
}
else {
    dbURL = process.env.DATABASE_URL;
}
let db;
exports.default = {
    connectToServer: function (callback) {
        mongodb_1.MongoClient.connect(dbURL, function (err, client) {
            if (client)
                db = client.db();
            return callback(err);
        });
    },
    getDb: function () {
        return db;
    },
};
