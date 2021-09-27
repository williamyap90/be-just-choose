"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.fetchUserLogin = exports.updateUserByEmail = exports.findUserByEmail = exports.addNewUser = exports.findUsers = void 0;
const Schemas_1 = require("../Schemas/Schemas");
const bcrypt_1 = __importDefault(require("bcrypt"));
const saltRounds = 12;
const findUsers = () => __awaiter(void 0, void 0, void 0, function* () {
    const res = yield Schemas_1.User.find({});
    return res;
});
exports.findUsers = findUsers;
const addNewUser = ({ firstName, lastName, email, password, }) => __awaiter(void 0, void 0, void 0, function* () {
    const newUser = {
        firstName,
        lastName,
        email,
        password,
    };
    try {
        const hashPw = yield bcrypt_1.default.hash(newUser.password, saltRounds);
        newUser.password = hashPw;
    }
    catch (err) {
        console.log(err);
    }
    const res = yield new Schemas_1.User(newUser).save();
    return res;
});
exports.addNewUser = addNewUser;
const findUserByEmail = (email) => __awaiter(void 0, void 0, void 0, function* () {
    const res = yield Schemas_1.User.findOne({ email: email });
    return res;
});
exports.findUserByEmail = findUserByEmail;
const updateUserByEmail = (email, updateUserBody) => __awaiter(void 0, void 0, void 0, function* () {
    const res = yield Schemas_1.User.updateOne({ email: email }, updateUserBody);
    return res;
});
exports.updateUserByEmail = updateUserByEmail;
const fetchUserLogin = (email, password) => __awaiter(void 0, void 0, void 0, function* () {
    const res = yield Schemas_1.User.findOne({ email: email });
    if (res) {
        const checkPw = yield bcrypt_1.default.compare(password, res.password);
        if (checkPw) {
            return res;
        }
        else {
            return Promise.reject({
                status: 400,
                message: 'Incorrect password',
            });
        }
    }
    return res;
});
exports.fetchUserLogin = fetchUserLogin;
