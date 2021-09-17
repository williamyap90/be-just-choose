"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const cors_1 = __importDefault(require("cors"));
const ApiRouter_1 = __importDefault(require("./Routers/ApiRouter"));
const Schemas_1 = require("./Schemas/Schemas");
const body_parser_1 = __importDefault(require("body-parser"));
// import { db } from './db/connection';
const db = require('./db/connection');
// import dotenv from 'dotenv';
// import mongoose from 'mongoose';
// console.log(db, 'db');
// dotenv.config();
// let dbURL: any;
// if (!process.env.DATABASE_URL) {
//     throw new Error('No database set');
// } else {
//     dbURL = process.env.DATABASE_URL;
// }
// export let db: any = mongoose
//     .connect(dbURL)
//     .then((dbConnection) => {
//         db = dbConnection;
//         console.log('Database connection success!');
//     })
//     .catch((err) => {
//         console.log(err);
//     });
const app = (0, express_1.default)();
app.use(express_1.default.json());
app.use(body_parser_1.default.json());
app.use((0, cors_1.default)());
app.get('/', (req, res) => {
    res.send('hello!!');
});
//////////////////////////////////////////////////////
// Routers start below
app.use('/api', ApiRouter_1.default);
// app.post('/api/users', (req, res) => {
//     const newUser = new User({
//         firstName: req.body.firstName,
//         lastName: req.body.lastName,
//         email: req.body.email,
//         eventHistory: [],
//         password: req.body.password,
//     });
//     newUser
//         .save()
//         .then((user) => {
//             res.status(201).send(user);
//         })
//         .catch((err) => {
//             res.status(400).send(err);
//         });
// });
app.patch('/api/users/:email', (req, res) => {
    Schemas_1.User.findOne({ email: req.params.email })
        .then((user) => {
        // const updateBody = req.body;
        console.log(req.body, '<<req.body');
        user.firstName = req.body.firstName;
        user.lastName = req.body.lastName;
        user.email = req.body.email;
        user.password = req.body.password;
        user.save().then((user) => {
            res.status(204).send(user);
        });
    })
        .catch((err) => {
        res.status(400).send(err);
    });
});
app.delete('/api/users/:email', (req, res) => {
    Schemas_1.User.findOneAndRemove({ email: req.params.email })
        .then((user) => {
        if (!user) {
            res.status(404).send();
        }
        res.status(204).send(user);
    })
        .catch((err) => {
        res.status(400).send(err);
    });
});
app.all('/*', () => console.log('Invalid route'));
exports.default = app;
//////////////////////////////////////////////////////////////////////////
//params,body, queries
// const helloFunction: express.RequestHandler<
//     { param: string },
//     string,
//     { query: string }
// > = (req, res) => {
//     res.send('hello');
//     const something = req.body;
// };
