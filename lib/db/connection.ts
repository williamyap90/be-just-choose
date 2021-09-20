import dotenv from 'dotenv';
import mongoose from 'mongoose';

dotenv.config();

export let dbURL: any;
if (!process.env.DATABASE_URL) {
    throw new Error('No database set');
} else {
    const dbUser = process.env.DB_USER;
    const dbPass = process.env.DB_PASSWORD;
    dbURL = `mongodb+srv://${dbUser}:${dbPass}@justchoose.spif4.mongodb.net/just-choose?retryWrites=true&w=majority`;
}

export let db: any = mongoose
    .connect(dbURL)
    .then((dbConnection) => {
        db = dbConnection;
        console.log('Database connection success!');
    })
    .catch((err) => {
        console.log(err);
    });
