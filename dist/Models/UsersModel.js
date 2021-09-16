"use strict";
// import connection from '../db/connection';
// import connect from '../db/connection';
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.findUsers = void 0;
const findUsers = () => __awaiter(void 0, void 0, void 0, function* () {
    console.log('inModel');
    // console.log(connect.connect(), '<< connect');
    // const db = connect.getConnectedClient().db('just-choose-test');
    // console.log(db, 'collection<<');
    // const response = await db.collection('users').find({}).toArray();
    // return response;
});
exports.findUsers = findUsers;
// export const findUser = async (email: string) => {
//     const db = connect.getConnectedClient();
//     const response = await db
//         .db('just-choose-test')
//         .collection('users')
//         .find({ email: email })
//         .toArray();
//     return response;
// };
