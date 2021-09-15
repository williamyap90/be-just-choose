import express, { Request, Response } from 'express';
import mongoose from 'mongoose';
import { MongoClient } from 'mongodb';
import dotenv from 'dotenv';
import { IUser } from './db/interfaces/users';
import { IEvent } from './db/interfaces/events';
import cors from 'cors';
import apiRouter from './Routers/ApiRouter';

dotenv.config();

const app = express();
//throw error if dburl not set
let dbURL;
if(!process.env.DATABASE_URL) {
    throw new Error('No database set');
} else {
    dbURL = process.env.DATABASE_URL;
}

//////////////////////////////////////////////////////////////////////////

// Declaring db type any to avoid TS error
let db: any;

// Connecting to database
MongoClient.connect(dbURL)
    .then((client) => {
        db = client.db();
    })
    .catch((err) => {
        console.log(err);
    });

app.use(express.json());




app.use(cors());
// http://localhost:3000/ <= prints 'Hello from server!'

app.use('/api', apiRouter);
app.get('/', (req, res) => {
    res.end('Hello from server!');
});

app.get('/users', (req, res) => {
    const getUsers = async () => {
        const allUsers = await db.collection('users').find({}).toArray();
        console.log(allUsers, '<-- allUsers');
    };
    getUsers();
});

app.post('/users', async (req, res) => {
    // const newUser: IUser = req.body;

    const newUser: IUser = {
        firstName: 'Matt',
        lastName: 'Webbo',
        email: 'webbfeet@gmail.com',
        eventHistory: [],
        password: '1234567890',
    };
    console.log('inserting...');
    const response = await db.collection('users').insertOne(newUser);
    console.log(response);
    //  .then((result: any) => console.log(`inserted ${result}`))
    //  .catch((err: any) => console.log(err));
    
});

app.patch('/users/:firstName', async (req, res) => {
    const { email }  =  req.body ;
    console.log(email);
    console.log(req.body);
    console.log(req.params);
    console.log('patching...');
    const response = await db.collection('users').updateOne({firstName : req.params.firstName}, { $set :  { email : email }});
    console.log(response);
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

export default app;

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
