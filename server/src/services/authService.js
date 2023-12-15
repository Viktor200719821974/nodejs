const bcrypt = require("bcrypt");
require('dotenv').config();

const db = require("../models");

const createUser = async(email, password, firstName, lastName) => {
    const hashedPassword = await bcrypt.hash(password, Number(process.env.USER_SALT_ROUNDS));
    const user = await db.User.create({ email, password: hashedPassword, firstName, lastName});
    return user;
};

const loginUser = async(password, userPassword) => {
    return bcrypt.compareSync(password, userPassword);
}

module.exports = {
    createUser,
    loginUser,
};