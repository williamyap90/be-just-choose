"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const cors_1 = __importDefault(require("cors"));
const ApiRouter_1 = __importDefault(require("./Routers/ApiRouter"));
const body_parser_1 = __importDefault(require("body-parser"));
const db = require('./db/connection');
const errors_1 = require("./errors");
const app = (0, express_1.default)();
app.use(express_1.default.json());
app.use(body_parser_1.default.json());
app.use((0, cors_1.default)());
app.get('/', (req, res) => {
    res.send('hello!!');
});
// Routers start below
app.use('/api', ApiRouter_1.default);
//// Refactor below code into MVC WITH testing
//
//
// // ToDo - Patch currently overwrites existing user, fields not provided will be deleted - fix.
// app.patch('/api/users/:email', (req, res) => {
//     User.findOne({ email: req.params.email })
//         .then((user) => {
//             // const updateBody = req.body;
//             console.log(req.body, '<<req.body');
//             user!.firstName = req.body.firstName;
//             user!.lastName = req.body.lastName;
//             user!.email = req.body.email;
//             user!.password = req.body.password;
//             user!.save().then((user) => {
//                 res.status(204).send(user);
//             });
//         })
//         .catch((err) => {
//             res.status(400).send(err);
//         });
// });
// app.delete('/api/users/:email', (req, res) => {
//     User.findOneAndRemove({ email: req.params.email })
//         .then((user) => {
//             if (!user) {
//                 res.status(404).send();
//             }
//             res.status(204).send(user);
//         })
//         .catch((err) => {
//             res.status(400).send(err);
//         });
// });
app.use(errors_1.handleRouter404);
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
