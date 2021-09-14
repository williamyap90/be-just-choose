import { model, Schema } from 'mongoose';

interface IUser {
    firstName: string;
    lastName: string;
    email: string;
    eventHistory: Array<Number>;
    password: string;
}

interface IUserDocument extends IUser, Document {}

const UserSchemaFields: Record<keyof IUser, any> = {
    firstName: {
        type: String,
        required: true,
    },
    lastName: {
        type: String,
    },
    email: {
        type: String,
    },
    eventHistory: {
        type: [{ eventId: String }],
    },
    password: {
        type: String,
    },
};

const UserSchema = new Schema(UserSchemaFields);
const User = model<IUserDocument>('User', UserSchema);

export { User, IUser };
