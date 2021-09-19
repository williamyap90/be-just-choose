"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.usersList = void 0;
const faker_1 = __importDefault(require("faker"));
exports.usersList = [];
for (let i = 0; i < 20; i++) {
    const firstName = faker_1.default.name.firstName();
    const lastName = faker_1.default.name.lastName();
    const email = firstName.toLowerCase() + lastName.toLowerCase() + '@test-jc.com';
    const password = faker_1.default.internet.password();
    const user = {
        firstName,
        lastName,
        email,
        password,
    };
    exports.usersList.push(user);
}
