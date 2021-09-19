import { usersData } from '../data/usersData';
import { eventsData } from '../data/eventsData';
import { User, Event } from '../../Schemas/Schemas';
import mongoose from 'mongoose';
import { dbURL } from '../connection';

// Seeding local database (connection required)
const seedLocalDb = () => {
    const connect = mongoose.createConnection(dbURL);

    connect.on('open', () => {
        connect.db
            .listCollections({ name: 'users' })
            .toArray((err, collection) => {
                if (err) {
                    console.log(err);
                    return;
                }
                if (collection!.length > 0) {
                    User.collection.drop();
                    console.log('Users collection dropped');
                }
                User.insertMany(usersData)
                    .then((user) => {
                        console.log(`${user.length} users seeded`);
                    })
                    .catch((err) => {
                        console.log(err);
                    });
            });
        connect.db
            .listCollections({ name: 'events' })
            .toArray((err, collectionNames) => {
                if (err) {
                    console.log(err);
                    return;
                }
                if (collectionNames!.length > 0) {
                    Event.collection.drop();
                    console.log('Events collection dropped');
                }
                Event.insertMany(eventsData)
                    .then((events) => {
                        console.log(`${events.length} events seeded`);
                    })
                    .catch((err) => {
                        console.log(err);
                    });
            });
    });
};
seedLocalDb();
