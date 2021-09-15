import express from 'express';
import { findUsers, findUser } from '../Models/UsersModel';

export const getUsers: express.RequestHandler = (req, res, next) => {
    console.log('in controller');
    findUsers().then((users) => {
        res.status(200).send({ users });
    });
};

export const getUserByEmail: express.RequestHandler = (req, res, next) => {
    const { email } = req.params;
    findUser(email).then((user) => {
        res.status(200).send({ user });
    });
};
