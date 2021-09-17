import faker from 'faker';

export const usersList: {
    firstName: string;
    lastName: string;
    email: string;
    password: string;
}[] = [];

for (let i = 0; i < 20; i++) {
    const firstName = faker.name.firstName();
    const lastName = faker.name.lastName();
    const email =
        firstName.toLowerCase() + lastName.toLowerCase() + '@test-jc.com';
    const password = faker.internet.password();

    const user = {
        firstName,
        lastName,
        email,
        password,
    };
    usersList.push(user);
}
