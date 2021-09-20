import { User } from '../Schemas/Schemas';

export const findUsers = async () => {
    const res = await User.find({});
    return res;
};

export const findUserByEmail = async (email: string) => {
    const res = await User.findOne({ email: email });
    return res;
};

export const addNewUser = async ({
    firstName,
    lastName,
    email,
    password,
}: any) => {
    const newUser = {
        firstName,
        lastName,
        email,
        password,
    };

    const res = await new User(newUser).save();
    return res;
};
