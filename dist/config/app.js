"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const mongoose_1 = __importDefault(require("mongoose"));
const dotenv_1 = __importDefault(require("dotenv"));
dotenv_1.default.config();
const app = (0, express_1.default)();
const dbURL = process.env.DATABASE_URL || '';
mongoose_1.default.connect(dbURL);
const db = mongoose_1.default.connection;
db.on('error', (err) => {
    console.log(err);
});
db.once('open', () => {
    console.log('Connected to mongoose.');
});
app.get('/', (req, res) => {
    res.send('hello');
});
exports.default = app;
