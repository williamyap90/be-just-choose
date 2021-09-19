import { User } from '../Schemas/Schemas';

export const findUsers = async () => {
    const res = await User.find({});
    return res;
};

export const findUserByEmail = async (email: string) => {
    const res = await User.findOne({ email: email });
    return res;
};

export const addNewUser = async (req: any) => {
    const newUser = {
        firstName: req.firstName,
        lastName: req.lastName,
        email: req.email,
        password: req.password,
    };

    const res = await new User(newUser).save();
    return res;
};
