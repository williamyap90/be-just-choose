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
dotenv_1.default.config();
const app = (0, express_1.default)();
//throw error if dburl not set
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
//params,body, queries
const helloFunction = (req, res) => {
    res.send('hello');
    const something = req.body;
};
const getUsersAndEvents = () => __awaiter(void 0, void 0, void 0, function* () {
    try {
        // const usersList = await User.find({});
        // const eventList = await Event.find({});
        const getUsers = db.collection('users').find({});
        console.log(getUsers, ' UL');
    }
    catch (err) {
        console.log(err);
    }
});
const addUser = () => __awaiter(void 0, void 0, void 0, function* () {
    const newUser = {
        firstName: 'Ammar',
        lastName: 'Hassan',
        email: 'sgm@sgm.co.uk',
        eventHistory: [],
        password: '1234567890',
    };
    try {
        const insertUser = yield db.collection('users').insertOne(newUser);
        console.log('inserting user...');
        console.log(insertUser);
        getUsersAndEvents();
    }
    catch (err) {
        console.error(err);
    }
});
getUsersAndEvents();
addUser();
exports.default = app;
