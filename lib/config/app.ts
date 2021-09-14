import express, { Application, Request, Response } from 'express';
import mongoose from 'mongoose';
import dotenv from 'dotenv';
import { User } from '../schema/users';
import { Event } from '../schema/events';

dotenv.config();

const app: Application = express();
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

const test = async () => {
    try {
        const usersList = await User.find({});
        const eventList = await Event.find({});
        console.log('here');
        console.log(usersList, ' UL');
        console.log(eventList, 'EL');
    } catch (err) {
        console.log(err);
    }
};
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

export default app;
