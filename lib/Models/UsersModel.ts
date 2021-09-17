import { User } from '../Schemas/Schemas';

export const findUsers = async () => {
    const response = await User.find({});
    return response;
};

export const findUserByEmail = async (email: string) => {
    const response = await User.findOne({ email: email });
    return response;
};
