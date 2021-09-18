'use strict';
Object.defineProperty(exports, '__esModule', { value: true });
exports.postUser = exports.getUserByEmail = exports.getUsers = void 0;
const UsersModel_1 = require('../Models/UsersModel');
const getUsers = (req, res, next) => {
    (0, UsersModel_1.findUsers)()
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
exports.getUsers = getUsers;
const getUserByEmail = (req, res, next) => {
    const { email } = req.params;
    (0, UsersModel_1.findUserByEmail)(email)
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
exports.getUserByEmail = getUserByEmail;
const postUser = (req, res) => {
    (0, UsersModel_1.addNewUser)(req.body)
        .then((user) => {
            res.status(201).send({ user });
        })
        .catch((err) => {
            res.status(400).send(err);
        });
};
exports.postUser = postUser;
