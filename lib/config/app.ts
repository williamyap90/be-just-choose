import express, { Request, Response } from 'express';
import mongoose from 'mongoose';
import dotenv from 'dotenv';
import { IUser } from '../db/interfaces/users'
import { IEvent } from '../db/interfaces/events'

dotenv.config();

const app = express();
//throw error if dburl not set
const dbURL = process.env.DATABASE_URL || '';
mongoose.connect(dbURL);

const db = mongoose.connection;

db.on('error', (err) => {
    console.log(err);
});
db.once('open', () => {
    console.log('Connected to mongoose.');
});

app.get('/', (req: Request, res: Response) => {
    res.send('hello');
});

//params,body, queries
const helloFunction:express.RequestHandler<{param: string}, string, {query : string}> = (req, res) =>{
        res.send('hello');
        const something = req.body
}

const getUsersAndEvents = async () => {
    try {
        // const usersList = await User.find({});
        // const eventList = await Event.find({});

        const getUsers = db.collection('users').find({});
        console.log(getUsers, ' UL');
    } catch (err) {
        console.log(err);
    }
};
const addUser = async () => {
    const newUser:IUser = {
        firstName: 'Ammar',
        lastName: 'Hassan',
        email: 'sgm@sgm.co.uk',
        eventHistory: [],
        password: '1234567890',
    };
    try {
        const insertUser = await db.collection('users').insertOne(newUser)
        console.log('inserting user...');
        console.log(insertUser);
        getUsersAndEvents();

    } catch(err) {
        console.error(err);
    }
};

getUsersAndEvents()
addUser();


export default app;
