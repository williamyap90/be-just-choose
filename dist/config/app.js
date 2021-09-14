"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const mongoose_1 = __importDefault(require("mongoose"));
const dotenv_1 = __importDefault(require("dotenv"));
const users_1 = require("../schema/users");
const events_1 = require("../schema/events");
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
const test = () => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const usersList = yield users_1.User.find({});
        const eventList = yield events_1.Event.find({});
        console.log('here');
        console.log(usersList, ' UL');
        console.log(eventList, 'EL');
    }
    catch (err) {
        console.log(err);
    }
});
test();
// const addUser = async () => {
//     const newUser = new User({
//         firstName: 'Scott',
//         lastName: 'Schema',
//         email: 'sgm@sgm.co.uk',
//         eventHistory: [],
//         password: '1234567890',
//     });
// };
exports.default = app;
