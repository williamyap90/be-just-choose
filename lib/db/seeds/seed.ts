// const faker = require('faker');
import faker from 'faker';
// const db = require('../../app');
// const User = require('../../Schemas/Schemas');
// import User  from '../../Schemas/Schemas';

// interface User {
//     firstName: string;
//     lastName: string;
//     email: string;
//     password: string;
//     eventHistory: []
// }

export const usersList: {
    firstName: string;
    lastName: string;
    email: string;
    password: string;
    eventHistory: string[];
}[] = [];

for (let i = 0; i < 20; i++) {
    const firstName = faker.name.firstName();
    const lastName = faker.name.lastName();
    const email =
        firstName.toLowerCase() + lastName.toLowerCase() + '@test-jc.com';
    const password = faker.internet.password();

    const user = {
        firstName,
        lastName,
        email,
        password,
        eventHistory: [],
    };
    usersList.push(user);
}

console.log(usersList, ' UL<<');

// export default usersList;
// User.insertMany(usersList).then(() => {
//     console.log('users inserted!');
// });
// .catch((err) => {
//     console.log(err);
// });
