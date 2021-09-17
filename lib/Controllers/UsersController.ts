import express from 'express';
import { findUsers, findUserByEmail, addNewUser } from '../Models/UsersModel';

export const getUsers: express.RequestHandler = (req, res, next) => {
    findUsers()
        .then((users) => {
            if (!users) {
                res.status(404).send();
            }
            res.status(200).send({ users });
        })
        .catch((err) => {
            console.log(err);
            res.status(400).send(err);
        });
};

export const getUserByEmail: express.RequestHandler = (req, res, next) => {
    //TODO: protect from injection for params?
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

export const postUser: express.RequestHandler = (req, res) => {
    addNewUser(req.body)
   
        .then((user) => {
            res.status(201).send({user});
        })
        .catch((err) => {
            console.log(err);
            res.status(400).send(err);
        });
};