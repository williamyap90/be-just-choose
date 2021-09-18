import { usersList } from './seed';
import { User, Event } from '../../Schemas/Schemas';

export const seedDb = () => {
    User.collection.drop();
    //commented out event as doesn't exist yet
    // Event.collection.drop();

    User.insertMany(usersList)
        .then((user: any) => {
            // console.log(`${user.length} users seeded`);
        })
        .catch((err: any) => {
            console.log(err);
        });
};
