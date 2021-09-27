import { User } from '../Schemas/Schemas';
import bcrypt from 'bcrypt';

const saltRounds = 12;

export const findUsers = async () => {
    const res = await User.find({});
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

    try {
        const hashPw = await bcrypt.hash(newUser.password, saltRounds);
        newUser.password = hashPw;
    } catch (err) {
        console.log(err);
    }

    const res = await new User(newUser).save();

    return res;
};

export const findUserByEmail = async (email: string) => {
    const res = await User.findOne({ email: email });
    return res;
};

export const updateUserByEmail = async (email: string, updateUserBody: any) => {
    const res = await User.updateOne({ email: email }, updateUserBody);
    return res;
};

export const fetchUserLogin = async (email: string, password: string) => {
    const res = await User.findOne({ email: email });

    if (res) {
        const checkPw = await bcrypt.compare(password, res.password);
        if (checkPw) {
            return res;
        } else {
            return Promise.reject({
                status: 400,
                message: 'Incorrect password',
            });
        }
    }
    return res;
};
