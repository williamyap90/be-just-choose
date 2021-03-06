import express from 'express';
import cors from 'cors';
import apiRouter from './Routers/ApiRouter';
import bodyParser from 'body-parser';
const db = require('./db/connection');
import { handleRouter404 } from './errors';

const app = express();

app.use(express.json());
app.use(bodyParser.json());
app.use(cors());

app.get('/', (req, res) => {
    res.send('hello!!');
});

// Routers start below

app.use('/api', apiRouter);

//// Refactor below code into MVC WITH testing
//
//

// // ToDo - Patch currently overwrites existing user, fields not provided will be deleted - fix.
// app.patch('/api/users/:email', (req, res) => {
//     User.findOne({ email: req.params.email })
//         .then((user) => {
//             // const updateBody = req.body;
//             console.log(req.body, '<<req.body');

//             user!.firstName = req.body.firstName;
//             user!.lastName = req.body.lastName;
//             user!.email = req.body.email;
//             user!.password = req.body.password;
//             user!.save().then((user) => {
//                 res.status(204).send(user);
//             });
//         })
//         .catch((err) => {
//             res.status(400).send(err);
//         });
// });

// app.delete('/api/users/:email', (req, res) => {
//     User.findOneAndRemove({ email: req.params.email })
//         .then((user) => {
//             if (!user) {
//                 res.status(404).send();
//             }
//             res.status(204).send(user);
//         })
//         .catch((err) => {
//             res.status(400).send(err);
//         });
// });

app.use(handleRouter404);

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
