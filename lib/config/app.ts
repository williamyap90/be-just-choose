import express, { Application, Request, Response } from 'express';
import mongoose from 'mongoose';
import dotenv from 'dotenv';

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

export default app;
