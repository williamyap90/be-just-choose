import { getUsers, getUserByEmail, postUser, patchUserByEmail } from '../Controllers/UsersController';
import express from 'express';
const usersRouter = express.Router();

usersRouter.route('/').get(getUsers).post(postUser);

usersRouter.route('/:email').get(getUserByEmail).patch(patchUserByEmail);

export default usersRouter;
