"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const cors_1 = __importDefault(require("cors"));
const ApiRouter_1 = __importDefault(require("./Routers/ApiRouter"));
const connection_1 = __importDefault(require("./db/connection"));
// import mongoose from 'mongoose';
const app = (0, express_1.default)();
app.use(express_1.default.json());
app.use((0, cors_1.default)());
connection_1.default.connectToServer((err, client) => {
    if (err)
        console.log(err);
    // All routes go here
    app.use('/api', ApiRouter_1.default);
    app.all('/*', () => console.log('Invalid route'));
});
exports.default = app;
////////////////////////////////////////////////////////////////////////////////
// app.get('/users', (req, res) => {
//     const getUsers = async () => {
//         const allUsers = await db.collection('users').find({}).toArray();
//         console.log(allUsers, '<-- allUsers');
//     };
//     getUsers();
// });
// app.post('/users', async (req, res) => {
//     // const newUser: IUser = req.body;
//     const newUser: IUser = {
//         firstName: 'Matt',
//         lastName: 'Webbo',
//         email: 'webbfeet@gmail.com',
//         eventHistory: [],
//         password: '1234567890',
//     };
//     console.log('inserting...');
//     const response = await db.collection('users').insertOne(newUser);
//     console.log(response);
//     //  .then((result: any) => console.log(`inserted ${result}`))
//     //  .catch((err: any) => console.log(err));
// });
// app.patch('/users/:firstName', async (req, res) => {
//     const { email } = req.body;
//     console.log(email);
//     console.log(req.body);
//     console.log(req.params);
//     console.log('patching...');
//     const response = await db
//         .collection('users')
//         .updateOne(
//             { firstName: req.params.firstName },
//             { $set: { email: email } }
//         );
//     console.log(response);
// });
//////////////////////////////////////////////////////////////////////////
// // Connection URL
// const client = new MongoClient(dbURL);
// // Database name
// const dbName = 'just-choose-test';
// const main = async () => {
//     await client.connect();
//     console.log('Connected successfully to server');
//     const db = client.db(dbName);
//     // Assigning users collection to variable
//     const usersDb = db.collection('users');
//     console.log(usersDb);
//     // Find all users
//     const findDocs = await usersDb.find({}).toArray();
//     console.log('Found documents =>', findDocs);
//     // Insert a document
//     const newUser: IUser = {
//         firstName: 'Will',
//         lastName: 'GGGG',
//         email: 'ggg@gmail.com',
//         eventHistory: [],
//         password: '1234567890',
//     };
//     const insertUser = await usersDb.insertOne(newUser);
//     console.log('Inserted user =>', insertUser);
//     // Find all users
//     const findUsers = await usersDb.find({ firstName: 'Will' }).toArray();
//     console.log('Found users =>', findUsers);
//     return 'done.';
// };
// main()
//     .then((res) => console.log(res, 'res'))
//     .catch((err) => console.log(err, 'err'))
//     .finally(() => client.close());
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
//////////////////////////////////////////////////////////////////////////
// mongoose.connect(dbURL);
// const db = mongoose.connection;
// db.on('error', (err) => {
//     console.log(err);
// });
// db.once('open', () => {
//     console.log('Connected to mongoose.');
// });
// app.get('/', (req: Request, res: Response) => {
//     res.send('hello');
// });
