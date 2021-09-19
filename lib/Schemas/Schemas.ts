import mongoose from 'mongoose';

const UserSchema = new mongoose.Schema(
    {
        firstName: {
            type: String,
            required: true,
        },
        lastName: {
            type: String,
            required: true,
        },
        email: {
            type: String,
            unique: true,
            required: true,
        },
        eventHistory: [{ eventId: String }],
        password: {
            type: String,
            required: true,
        },
        avatarUrl: {
            type: String,
            default: 'https://climatefutures.net/cccd/images/sampleImage.png',
        },
    },
    { collection: 'users', versionKey: false }
);

// // Original EventSchema
// const EventSchema = new mongoose.Schema(
//     {
//         eventName: {
//             type: String,
//             required: true,
//         },
//         eventURL: String,
//         dateCreated: {
//             type: Date,
//             default: Date.now,
//         },
//         organiser: {
//             type: mongoose.Schema.Types.ObjectId,
//             ref: 'User',
//         },
//         isDraft: Boolean,
//         endDate: Date,
//         winningRestaurant: {
//             restaurantName: String,
//             cuisine: String,
//             priceRange: String,
//         },
//         voters: [{ type: mongoose.Schema.Types.ObjectId, ref: 'User' }],
//         restaurantList: [
//             { restaurantName: String, cuisine: String, priceRange: String },
//         ],
//     },
//     { collection: 'events', versionKey: false }
// );
// Temporary EventSchema
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
        organiser: String,
        isDraft: Boolean,
        endDate: Date,
        winningRestaurant: {
            restaurantName: String,
            categories: String,
            displayAddress: String,
            coordinates: { latitude: Number, longitude: Number },
            phoneNo: String,
            rating: Number,
            price: String,
            reviewCount: Number,
            imageUrl: String,
            url: String,
        },
        voters: [{ type: mongoose.Schema.Types.ObjectId, ref: 'User' }],
        restaurantList: [
            { restaurantName: String, cuisine: String, priceRange: String },
        ],
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

// Object from front end - single restaurant
// {
//     name:'fuel',
//     categories:['string','string'],
//     coordinates: {longitude:51,latitude:55},
//     image_url: 'http://www.google.com',
//     display_address:[address1, address2, postcode],
//     phone_no: 05125414,
//     rating: 5,
//     price: '£',
//     review_count: 51,
//     url: 'google'
// }
