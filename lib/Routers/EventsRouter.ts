import {
    getEvents,
    postEvent,
    getEventsByName,
} from '../Controllers/EventsController';
import express from 'express';
const eventsRouter = express.Router();

eventsRouter.route('/').get(getEvents).post(postEvent);

eventsRouter.route('/:eventName').get(getEventsByName);

export default eventsRouter;
