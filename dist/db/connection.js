"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.db = exports.dbURL = void 0;
const dotenv_1 = __importDefault(require("dotenv"));
const mongoose_1 = __importDefault(require("mongoose"));
dotenv_1.default.config();
if (!process.env.DATABASE_URL) {
    throw new Error('No database set');
}
else {
    const dbUser = process.env.DB_USER;
    const dbPass = process.env.DB_PASSWORD;
    exports.dbURL = `mongodb+srv://${dbUser}:${dbPass}@justchoose.spif4.mongodb.net/just-choose?retryWrites=true&w=majority`;
    // dbURL = 'mongodb://localhost/just-choose-test';
}
exports.db = mongoose_1.default
    .connect(exports.dbURL)
    .then((dbConnection) => {
    exports.db = dbConnection;
    console.log('Database connection success!');
})
    .catch((err) => {
    console.log(err);
});
