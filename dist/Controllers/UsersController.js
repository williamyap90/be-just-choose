"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getUserByEmail = exports.getUsers = void 0;
const UsersModel_1 = require("../Models/UsersModel");
const getUsers = (req, res, next) => {
    console.log('in controller');
    (0, UsersModel_1.findUsers)().then((users) => {
        res.status(200).send({ users });
    });
};
exports.getUsers = getUsers;
const getUserByEmail = (req, res, next) => {
    const { email } = req.params;
    (0, UsersModel_1.findUser)(email).then((user) => {
        res.status(200).send({ user });
    });
};
exports.getUserByEmail = getUserByEmail;
