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
const mongodb_1 = require("mongodb");
const dotenv_1 = __importDefault(require("dotenv"));
dotenv_1.default.config();
const app = (0, express_1.default)();
//throw error if dburl not set
const dbURL = process.env.DATABASE_URL || '';
//////////////////////////////////////////////////////////////////////////
// Declaring db type any to avoid TS error
let db;
// Connecting to database
mongodb_1.MongoClient.connect(dbURL)
    .then((client) => {
    db = client.db();
})
    .catch((err) => {
    console.log(err);
});
app.use(express_1.default.json());
// http://localhost:3000/ <= prints 'Hello from server!'
app.get('/', (req, res) => {
    res.end('Hello from server!');
});
app.get('/users', (req, res) => {
    const getUsers = () => __awaiter(void 0, void 0, void 0, function* () {
        const allUsers = yield db.collection('users').find({}).toArray();
        console.log(allUsers, '<-- allUsers');
    });
    getUsers();
});
app.post('/add-user', (req, res) => {
    const newUser = req.body;
    // const newUser: IUser = {
    //     firstName: 'Scott',
    //     lastName: 'PGPGG',
    //     email: 'scc@hotmail.com',
    //     eventHistory: [],
    //     password: '1234567890',
    // };
    // db.collection('users').insertOne(newUser);
});
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
// const getUsersAndEvents = async () => {
//     try {
//         const collection = db.collection('users');
//         collection.find().toArray(function (err, docs) {
//             if (err) console.log(err);
//             console.log(docs, 'docs!!!');
//         });
//         console.log(collection, ' UL');
//     } catch (err) {
//         console.log(err);
//     }
// };
// getUsersAndEvents();
// const addUser = async () => {
//     const newUser: IUser = {
//         firstName: 'Ammar',
//         lastName: 'Hassan',
//         email: 'sgm@sgm.co.uk',
//         eventHistory: [],
//         password: '1234567890',
//     };
//     try {
//         const insertUser = await db.collection('users').insertOne(newUser);
//         console.log('inserting user...');
//         console.log(insertUser);
//         getUsersAndEvents();
//     } catch (err) {
//         console.error(err);
//     }
// };
// getUsersAndEvents();
// // addUser();
exports.default = app;
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
