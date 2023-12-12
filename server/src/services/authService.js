const bcrypt = require("bcrypt");

const db = require("../models/index");

const createUser = async(email, password, firstName, lastName) => {
    const hashedPassword = await bcrypt.hash(password, 10);
    const user = await db.Users.create({ email, password: hashedPassword, firstName, lastName });
    return user;
};

const loginUser = async(password, userPassword) => {
    return bcrypt.compareSync(password, userPassword);
}

module.exports = {
    createUser,
    loginUser,
};