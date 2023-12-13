const db = require("../models");

const findUserById = async(email) => {
    const user = await db.User.findOne({ where: { email } });
    console.log(user);
    return user;
};

module.exports = { findUserById, };