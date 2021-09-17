"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.db = void 0;
const dotenv_1 = __importDefault(require("dotenv"));
const mongoose_1 = __importDefault(require("mongoose"));
dotenv_1.default.config();
let dbURL;
if (!process.env.DATABASE_URL) {
    throw new Error('No database set');
}
else {
    dbURL = process.env.DATABASE_URL;
}
exports.db = mongoose_1.default
    .connect(dbURL)
    .then((dbConnection) => {
    exports.db = dbConnection;
    console.log('Database connection success!');
})
    .catch((err) => {
    console.log(err);
});
