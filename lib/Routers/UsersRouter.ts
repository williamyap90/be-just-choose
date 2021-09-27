import {
    getUsers,
    getUserByEmail,
    postUser,
    patchUserByEmail,
    getUserLogin,
} from '../Controllers/UsersController';
import express from 'express';
const usersRouter = express.Router();

usersRouter.route('/').get(getUsers).post(postUser);

usersRouter
    .route('/:email')
    .get(getUserByEmail)
    .patch(patchUserByEmail)
    .post(getUserLogin);

export default usersRouter;
