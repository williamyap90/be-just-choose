import { getEvents, postEvent } from '../Controllers/EventsController';
import express from 'express';
const eventsRouter = express.Router();

eventsRouter.route('/').get(getEvents).post(postEvent);

export default eventsRouter;
