import {
    getEvents,
    postEvent,
    getEventByName,
    patchEventByName,
} from '../Controllers/EventsController';
import express from 'express';
const eventsRouter = express.Router();

eventsRouter.route('/').get(getEvents).post(postEvent);

eventsRouter.route('/:eventName').get(getEventByName).patch(patchEventByName);

export default eventsRouter;
