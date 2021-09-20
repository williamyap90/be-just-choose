import express from 'express';
import endpoint from '../endpoints.json';
import usersRouter from './UsersRouter';
import eventsRouter from './EventsRouter';
import axios from 'axios';

const apiRouter = express.Router();

apiRouter.get('/', (req, res, next) => {
    res.status(200).send(endpoint);
});

apiRouter.use('/users', usersRouter);
apiRouter.use('/events', eventsRouter);

apiRouter.get('/restaurants', (req, res) => {
    //refactor
    const reviewsAPI = axios.create({
        baseURL: 'https://api.yelp.com/v3/businesses/search',
    });
    const API_KEY = process.env.REACT_APP_API_KEY;
    const response = reviewsAPI
        .get('', {
            params: {
                location: req.query.location,
                radius: req.query.radius,
                limit: req.query.limit,
                sort_by: req.query.sort_by,
                price: req.query.price,
                offset: req.query.offset,
            },
            headers: {
                Authorization: `Bearer ${API_KEY}`,
            },
        })
        .then((response) => {
            res.status(200).send({ restaurants: response.data });
        })
        .catch((e) => {
            console.log(e);
        });
});

export default apiRouter;
