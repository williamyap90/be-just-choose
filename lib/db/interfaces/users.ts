// import { model, Schema } from 'mongoose';

interface IUser {
    firstName: string;
    lastName: string;
    email: string;
    eventHistory: Array<number>;
    password: string;
}

// interface IUserDocument extends IUser, Document {}

// const UserSchemaFields<IUser> = {
//     firstName: {
//         type: String,
//         // required: true,
//     },
//     lastName: {
//         type: String,
//     },
//     email: {
//         type: String,
//         unique: true
//     },
//     eventHistory: {
//         type: [{ eventId: String }],
//     },
//     password: {
//         type: String,
//     },
// };

// const UserSchema = new Schema(UserSchemaFields);
// const User = model<IUserDocument>('user', UserSchema);

export { IUser };
