import connection from '../db/connection';

export const findUsers = async () => {
    const db = connection.getDb();
    // const db = await dbConnection((db)=>{
    //     const response = await db.collection('users').find({}).toArray();
    // })
    const response = await db.collection('users').find({}).toArray();
    return response;
};

export const findUser = async (email: string) => {
    const db = connection.getDb();
    const response = await db
        .collection('users')
        .find({ email: email })
        .toArray();
    return response;
};
