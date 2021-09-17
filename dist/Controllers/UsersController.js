"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getUsers = void 0;
const UsersModel_1 = require("../Models/UsersModel");
const getUsers = (req, res, next) => {
    console.log('in controller');
    (0, UsersModel_1.findUsers)()
        .then((users) => {
        res.status(200).send({ users });
    })
        .catch((err) => console.log(err));
};
exports.getUsers = getUsers;
// export const getUserByEmail: express.RequestHandler = (req, res, next) => {
//     const { email } = req.params;
//     findUser(email).then((user) => {
//         res.status(200).send({ user });
//     });
// };
