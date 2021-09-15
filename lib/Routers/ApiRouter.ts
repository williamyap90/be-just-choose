import express from 'express';
import endpoint from '../endpoints.json';
import usersRouter from './UsersRouter';
const apiRouter = express.Router();

apiRouter.get('/', (req, res, next) => {
    res.status(200).send(endpoint);
});

apiRouter.use('/users', usersRouter);
// apiRouter.use('/events', eventsRouter);

export default apiRouter;
