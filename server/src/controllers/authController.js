const usersService = require("../services/usersService");
const authService = require("../services/authService");
const tokensService = require("../services/tokensService");

const db = require("../db");

const loginUser = async(req, res, next) => {
    try {
        const { email, password } = req.body;
        const user = await usersService.findUserByEmail(email);
        if (!user) {
            return res.status(400).json('Bad email or password');
        }
        const userPassword = user.password;
        const userId = user.id;
        const comparePassword = await authService.loginUser(password, userPassword);
        if (!comparePassword) {
            return res.status(400).json('Bad email or password');
        }
        const { accessToken, refreshToken } = await tokensService.generateTokenPair(email, userId);
        await tokensService.saveTokens(accessToken, refreshToken, userId);
        return res.status(200).json({ user, accessToken, refreshToken });
    } catch (e) {
        next(e);
    }
};

const registrationUser = async(req, res, next) => {
    try {
        const { email, password, firstName, lastName } = req.body;
        const exist = await usersService.findUserByEmail(email);
        if (exist) {
            return res.status(404).json('User already exist');
        }
        const user = await authService.createUser(email, password, firstName, lastName);
        // const userId = user.id;
        res.status(201).json(user);
    } catch (e) {
        next(e);
    }
};

const logOut = async(req, res, next) => {
    try {
        const { id } = req.user;
        await tokensService.deleteTokenPair(id);
        res.status(200).json('Ok');
    } catch (e) {
        next(e);
    }
}

const forgetPasswordUser = async(req, res, next) => {
    try {
        res.send('Hello');
    } catch (e) {
        next(e);
    }
};

module.exports = { 
    loginUser, 
    registrationUser, 
    forgetPasswordUser, 
    logOut,
};