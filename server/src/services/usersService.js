const db = require("../models/index");

const findUserById = async(email) => {
    const user = await db.Users.findOne({ where: { email } });
    return user;
};

module.exports = { findUserById, };