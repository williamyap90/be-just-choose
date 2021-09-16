import { getUsers } from '../Controllers/UsersController';
import express from 'express';
const usersRouter = express.Router();

usersRouter.route('/').get(getUsers);

// usersRouter.route('/:email').get(getUserByEmail);

export default usersRouter;
