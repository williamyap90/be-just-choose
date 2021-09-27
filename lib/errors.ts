import express from 'express';
export const handleRouter404: express.RequestHandler = (req, res, next) => {
    res.status(404).send({ message: 'Invalid path' });
};
