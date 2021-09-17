
import { User } from '../Schemas/Schemas';
// import { db } from '../db/connection'




export const findUsers = async () => {
    const response = await User.find({});
    console.log(response);
    return response;
};

export const findUserByEmail = async (email: string) => {
    const response = await User.findOne({ email: email });
    return response;
};
