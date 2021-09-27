import mongoose from 'mongoose';

const UserSchema = new mongoose.Schema(
    {
        firstName: { type: String, required: true },
        lastName: { type: String, required: true },
        email: {
            type: String,
            unique: true,
            required: true,
        },
        eventHistory: [{ eventId: String }],
        password: { type: String, required: true },
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
//             categories: String,
//             displayAddress: String,
//             coordinates: { latitude: Number, longitude: Number },
//             phoneNo: String,
//             rating: Number,
//             price: String,
//             reviewCount: Number,
//             imageUrl: String,
//             url: String,
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
        eventName: { type: String, required: true },
        eventURL: { type: String, default: '' },
        dateCreated: { type: Date, default: Date.now },
        organiser: String,
        isDraft: { type: Boolean, default: false },
        endDate: Date,
        winningRestaurant: {
            type: {
                restaurantName: String,
                categories: [String],
                displayAddress: [String],
                coordinates: { latitude: Number, longitude: Number },
                phoneNo: String,
                rating: Number,
                price: String,
                reviewCount: Number,
                imageUrl: String,
                url: String,
                upvotes: { type: Number, default: 0 },
                downvotes: { type: Number, default: 0 },
            },
            default: {},
        },
        voters: { type: [String], default: [] },
        restaurantList: {
            type: [
                {
                    restaurantName: String,
                    categories: [String],
                    displayAddress: [String],
                    coordinates: { latitude: Number, longitude: Number },
                    phoneNo: String,
                    rating: Number,
                    price: String,
                    reviewCount: Number,
                    imageUrl: String,
                    url: String,
                    upvotes: { type: Number, default: 0 },
                    downvotes: { type: Number, default: 0 },
                },
            ],
            default: [],
        },
    },
    { collection: 'events', versionKey: false }
);

//upvotes downvotes both default to 0 everytime you add restaurant

// export interface UserDoc extends Document {
//     firstName: string;
//     lastName: string;
//     email: string;
//     password: string;
// }

interface UserDoc extends mongoose.Document {
    _id: any;
    firstName: string;
    lastName: string;
    email: string;
    password: string;
    avatarUrl: string;
    eventHistory: any;
}

export const User = mongoose.model<UserDoc>('User', UserSchema);
export const EventModel = mongoose.model('Event', EventSchema);

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
