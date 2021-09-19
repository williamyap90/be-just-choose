import { usersData } from '../data/usersData';
import { eventsData } from '../data/eventsData';
import { User, Event } from '../../Schemas/Schemas';
import mongoose from 'mongoose';
import { dbURL } from '../connection';

// Seeding database for testing (no connection)
export const seedDb = () => {
    const connect = mongoose.createConnection(dbURL);
    connect.on('open', () => {
        connect.db
            // .listCollections() //searching for all collections
            .listCollections({ name: 'users' }) //searching for user collection
            .toArray((err, collection) => {
                console.log(collection, 'CL'); //log search result
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
                        // console.log(`${user.length} users seeded`);
                    })
                    .catch((err) => {
                        console.log(err);
                    });
            });

        // Events check collection, drop if exists before inserting
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
                        // console.log(`${events.length} events seeded`);
                    })
                    .catch((err) => {
                        console.log(err);
                    });
            });
    });

    //BELOW CODE IS FINE - check for collections before dropping
    // User.collection.drop();
    // Event.collection.drop();
    // User.insertMany(usersData)
    //     .then((user) => {
    //         // console.log(`${user.length} users seeded`);
    //     })
    //     .catch((err) => {
    //         console.log(err);
    //     });
    // Event.insertMany(eventsData)
    //     .then((events) => {
    //         console.log(`${events.length} events seeded`);
    //     })
    //     .catch((err) => {
    //         console.log(err);
    //     });
};
