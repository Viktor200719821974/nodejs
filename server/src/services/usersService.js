const models = require("../models");

const findUserByEmail = async(email) => {
    return await models.User.findOne({ 
        where: { email },
        attributes: {
            exclude: ['createdAt', 'updatedAt']
        }, 
    });
};

const getUsers = async() => {
    return await models.User.findAll({
        attributes: {
            exclude: ['createdAt', 'updatedAt']
        }
    });
};

const getUserById = async(id) => {
    return await models.User.findOne({ 
        where: { id },
        attributes: {
            exclude: ['createdAt', 'updatedAt']
        }, 
    });
};

module.exports = { findUserByEmail, getUsers, getUserById, };