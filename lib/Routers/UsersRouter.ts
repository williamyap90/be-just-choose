import { getUsers, getUserByEmail, postUser } from '../Controllers/UsersController';
import express from 'express';
const usersRouter = express.Router();

usersRouter.route('/').get(getUsers).post(postUser);

usersRouter.route('/:email').get(getUserByEmail);

export default usersRouter;
