"use strict";
// import faker from 'faker';
const faker = require('faker');
// const db = require('../../app');
// const User = require('../../Schemas/Schemas');
// import User  from '../../Schemas/Schemas';
const usersList = [];
for (let i = 0; i < 20; i++) {
    const firstName = faker.name.firstName();
    const lastName = faker.name.lastName();
    const email = firstName.toLowerCase() + lastName.toLowerCase() + '@test-jc.com';
    const password = faker.internet.password();
    let user = {
        firstName,
        lastName,
        email,
        password,
        eventHistory: [],
    };
    usersList.push(user);
}
console.log(usersList, ' UL<<');
// User.insertMany(usersList).then(() => {
//     console.log('users inserted!');
// });
// .catch((err) => {
//     console.log(err);
// });
