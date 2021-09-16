// import connection from '../db/connection';
// import connect from '../db/connection';

export const findUsers = async () => {
    console.log('inModel');
    // console.log(connect.connect(), '<< connect');

    // const db = connect.getConnectedClient().db('just-choose-test');
    // console.log(db, 'collection<<');

    // const response = await db.collection('users').find({}).toArray();
    // return response;
};

// export const findUser = async (email: string) => {
//     const db = connect.getConnectedClient();

//     const response = await db
//         .db('just-choose-test')
//         .collection('users')
//         .find({ email: email })
//         .toArray();
//     return response;
// };
