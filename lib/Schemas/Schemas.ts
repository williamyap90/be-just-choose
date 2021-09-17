import mongoose from 'mongoose';

const Schema = mongoose.Schema;

const UserSchema = new mongoose.Schema(
    {
        firstName: String,
        lastName: String,
        email: {
            type: String,
            unique: true,
        },
        eventHistory: [{ eventId: String }],
        password: String,
    },
    { collection: 'users', versionKey: false }
);

const EventSchema = new mongoose.Schema(
    {
        eventName: {
            type: String,
            required: true,
        },
        eventURL: String,
        dateCreated: {
            type: Date,
            default: Date.now,
        },
        organiser: {
            type: mongoose.Schema.Types.ObjectId,
            ref: 'User',
        },
        restaurantList: [
            { restaurantName: String, cuisine: String, priceRange: String },
        ],
        isDraft: Boolean,
        voters: [{ type: mongoose.Schema.Types.ObjectId, ref: 'User' }],
        winningRestaurant: {
            restaurantName: String,
            cuisine: String,
            priceRange: String,
        },
        endDate: Date,
    },
    { collection: 'events', versionKey: false }
);

export interface UserDoc extends Document {
    firstName: string;
    lastName: string;
    email: string;
    password: string;
}

export const User = mongoose.model<UserDoc>('User', UserSchema);
export const Event = mongoose.model('Event', EventSchema);
