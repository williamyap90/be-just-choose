import dotenv from 'dotenv';
import mongoose from 'mongoose';





dotenv.config();
let dbURL: any;
if (!process.env.DATABASE_URL) {
    throw new Error('No database set');
} else {
    dbURL = process.env.DATABASE_URL;
}

export let db: any =
mongoose
    .connect(dbURL)
    .then((dbConnection) => {
        db = dbConnection;
        console.log('Database connection success!');
    })
    .catch((err) => {
        console.log(err);
    });
