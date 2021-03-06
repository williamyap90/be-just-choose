import express from 'express';
import {
    findUsers,
    findUserByEmail,
    addNewUser,
    updateUserByEmail,
    fetchUserLogin,
} from '../Models/UsersModel';

export const getUsers: express.RequestHandler = (req, res, next) => {
    findUsers()
        .then((users) => {
            if (!users) {
                res.status(404).send();
            }
            res.status(200).send({ users });
        })
        .catch((err) => {
            res.status(400).send(err);
        });
};

export const postUser: express.RequestHandler = (req, res) => {
    addNewUser(req.body)
        .then((user) => {
            res.status(201).send({ user });
        })
        .catch((err) => {
            res.status(400).send(err);
        });
};

export const getUserByEmail: express.RequestHandler = (req, res, next) => {
    const { email } = req.params;
    findUserByEmail(email)
        .then((user) => {
            if (!user) {
                res.status(404).send();
            }
            res.status(200).send({ user });
        })
        .catch((err) => {
            res.status(400).send(err);
        });
};

export const patchUserByEmail: express.RequestHandler = (req, res, next) => {
    const { email } = req.params;
    const updateUserBody = req.body;
    updateUserByEmail(email, updateUserBody)
        .then((user) => {
            if (!user) {
                res.status(400).send();
            }
            res.status(200).send({ user });
        })
        .catch((err) => {
            res.status(400).send(err);
        });
};

export const getUserLogin: express.RequestHandler = (req, res, next) => {
    const { email } = req.params;
    const { password } = req.body;
    fetchUserLogin(email, password)
        .then((user) => {
            if (!user) {
                res.status(400).send();
            }
            res.status(200).send({ user });
        })
        .catch((err) => {
            res.status(400).send(err);
        });
};
