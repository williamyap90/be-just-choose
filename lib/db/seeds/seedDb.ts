import { usersData } from '../data/usersData';
import { User, Event } from '../../Schemas/Schemas';
import mongoose from 'mongoose';
import { dbURL } from '../connection';

// Seeding database for testing (no connection)
export const seedDb = () => {
    User.collection.drop();
    //commented out event as doesn't exist yet
    // Event.collection.drop();

    User.insertMany(usersData)
        .then((user: any) => {
            // console.log(`${user.length} users seeded`);
        })
        .catch((err: any) => {
            console.log(err);
        });
};

// Seeding local database (connection required)
const seedLocalDb = () => {
    mongoose.connect(dbURL);

    User.collection.drop();
    //commented out event as doesn't exist yet
    // Event.collection.drop();

    User.insertMany(usersData)
        .then((user: any) => {
            console.log(`${user.length} users seeded`);
        })
        .catch((err: any) => {
            console.log(err);
        })
        .finally(() => {
            mongoose.connection.close();
        });
};
seedLocalDb();
