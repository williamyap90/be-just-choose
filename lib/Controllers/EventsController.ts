import express from 'express';
import { findEvents } from '../Models/EventsModel';

export const getEvents: express.RequestHandler = (req, res, next) => {
    findEvents()
        .then((events) => {
            if (!events) {
                res.status(404).send();
            }
            res.status(200).send({ events });
        })
        .catch((err) => {
            res.send(400).send(err);
        });
};
