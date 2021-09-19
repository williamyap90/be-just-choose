import { getEvents } from '../Controllers/EventsController';
import express from 'express';
const eventsRouter = express.Router();

eventsRouter.route('/').get(getEvents);

export default eventsRouter;
