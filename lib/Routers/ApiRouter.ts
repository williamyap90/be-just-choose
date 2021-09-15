import express from 'express';
import endpoint from '../endpoints.json';
const apiRouter = express.Router();

apiRouter.get('/', (req, res, next) => {
    console.log('in apiRouter');

    res.status(200).send(endpoint);
});

export default apiRouter;