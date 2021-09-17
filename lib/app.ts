import express from 'express';
import cors from 'cors';
import apiRouter from './Routers/ApiRouter';

import mongoose from 'mongoose';
import dotenv from 'dotenv';
import { User, Event } from './Schemas/Schemas';
import bodyParser from 'body-parser';

dotenv.config();
let dbURL: any;
if (!process.env.DATABASE_URL) {
    throw new Error('No database set');
} else {
    dbURL = process.env.DATABASE_URL;
}

export let db: any;
mongoose
    .connect(dbURL)
    .then((dbConnection) => {
        db = dbConnection;
        console.log('Database connection success!');
    })
    .catch((err) => {
        console.log(err);
    });

const app = express();

app.use(express.json());
app.use(bodyParser.json());
app.use(cors());

app.get('/', (req, res) => {
    res.send('hello!!');
});

app.post('/api/users', (req, res) => {
    const newUser = new User({
        firstName: req.body.firstName,
        lastName: req.body.lastName,
        email: req.body.email,
        eventHistory: [],
        password: req.body.password,
    });
    newUser
        .save()
        .then((user) => {
            res.status(201).send(user);
        })
        .catch((err) => {
            res.status(400).send(err);
        });
});

app.get('/api/users', (req, res) => {
    User.find({})
        .then((user) => {
            if (!user) {
                res.status(404).send();
            }
            res.status(200).send(user);
        })
        .catch((err) => {
            res.status(400).send(err);
        });
});

app.get('/api/users/:email', (req, res) => {
    User.findOne({ email: req.params.email })
        .then((user) => {
            if (!user) {
                res.status(404).send();
            }
            res.status(200).send(user);
        })
        .catch((err) => {
            res.status(400).send(err);
        });
});

app.patch('/api/users/:email', (req, res) => {
    User.findOne({ email: req.params.email })
        .then((user) => {
            // const updateBody = req.body;
            console.log(req.body, '<<req.body');

            user!.firstName = req.body.firstName;
            user!.lastName = req.body.lastName;
            user!.email = req.body.email;
            user!.password = req.body.password;
            user!.save().then((user) => {
                res.status(204).send(user);
            });
        })
        .catch((err) => {
            res.status(400).send(err);
        });
});

app.delete('/api/users/:email', (req, res) => {
    User.findOneAndRemove({ email: req.params.email })
        .then((user) => {
            if (!user) {
                res.status(404).send();
            }
            res.status(204).send(user);
        })
        .catch((err) => {
            res.status(400).send(err);
        });
});

app.use('/api', apiRouter);

app.all('/*', () => console.log('Invalid route'));

export default app;

//////////////////////////////////////////////////////////////////////////

//params,body, queries
// const helloFunction: express.RequestHandler<
//     { param: string },
//     string,
//     { query: string }
// > = (req, res) => {
//     res.send('hello');
//     const something = req.body;
// };
