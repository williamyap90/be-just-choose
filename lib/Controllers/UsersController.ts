import express from 'express';
import { findUsers } from '../Models/UsersModel';

export const getUsers: express.RequestHandler = (req, res, next) => {
    console.log('in controller');
    findUsers()
        .then((users: any) => {
            res.status(200).send({ users });
        })
        .catch((err) => console.log(err));
};

// export const getUserByEmail: express.RequestHandler = (req, res, next) => {
//     const { email } = req.params;
//     findUser(email).then((user) => {
//         res.status(200).send({ user });
//     });
// };
