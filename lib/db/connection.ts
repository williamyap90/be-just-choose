import { MongoClient } from 'mongodb';
import dotenv from 'dotenv';

dotenv.config();

let dbURL: any;
if (!process.env.DATABASE_URL) {
    throw new Error('No database set');
} else {
    dbURL = process.env.DATABASE_URL;
}

let db: any;

export default {
    connectToServer: function (callback: Function) {
        MongoClient.connect(dbURL, function (err, client) {
            if (client) db = client.db();
            return callback(err);
        });
    },

    getDb: function () {
        return db;
    },
};
