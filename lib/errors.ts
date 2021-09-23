import express from 'express';
export const handleRouter404: express.RequestHandler = (req, res, next) => {
    console.log(res);
    console.log('in error.ts');
    res.status(404).send({ message: 'Invalid path' });
};
