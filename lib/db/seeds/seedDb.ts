import { usersData } from '../data/usersData';
import { eventsData } from '../data/eventsData';
import { User, Event } from '../../Schemas/Schemas';
import mongoose from 'mongoose';
import { dbURL } from '../connection';

// Seeding database for testing (no connection)
export const seedDb = () => {
    User.collection.drop();
    Event.collection.drop();

    User.insertMany(usersData)
        .then((user) => {
            // console.log(`${user.length} users seeded`);
        })
        .catch((err) => {
            console.log(err);
        });

    Event.insertMany(eventsData)
        .then((events) => {
            console.log(`${events.length} events seeded`);
        })
        .catch((err) => {
            console.log(err);
        });
};
