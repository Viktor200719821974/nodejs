const usersService = require("../services/usersService");

const getUsers = async(req, res, next) => {
    try {
        const users = await usersService.getUsers();
        res.status(200).send(users);
    } catch (e) {
        next(e);
    }
};

const getUserById = async(req, res, next) => {
    try {
        const { id } = req.params;
        const user = await usersService.getUserById(id);
        res.status(200).json(user);
    } catch (e) {
        next(e);
    }
}

module.exports = { getUsers, getUserById, };