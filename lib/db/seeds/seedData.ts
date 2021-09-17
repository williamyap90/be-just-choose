import { usersList } from './seed';
import mongoose from 'mongoose';
import { dbURL } from '../connection';
import { User, Event } from '../../Schemas/Schemas';

mongoose.connect(dbURL);

User.collection.drop();
Event.collection.drop();

User.create(usersList)
    .then((user: any) => {
        console.log(`${user.length} users seeded`);
    })
    .catch((err: any) => {
        console.log(err);
    })
    .finally(() => {
        mongoose.connection.close();
    });
