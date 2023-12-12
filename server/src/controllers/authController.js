const usersService = require("../services/usersService");
const authService = require("../services/authService");
const tokensService = require("../services/tokensService");

const loginUser = async(req, res, next) => {
    try {
        const { email, password } = req.body;
        const user = await usersService.findUserById(email);
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
        console.log(accessToken, 'accessToken');
        await tokensService.saveTokens(accessToken, refreshToken, userId);
        console.log("Tokens");
        return res.status(200).json({ user, accessToken, refreshToken });
    } catch (e) {
        next(e);
    }
};

const registrationUser = async(req, res, next) => {
    try {
        const { email, password, firstName, lastName } = req.body;
        const exist = await usersService.findUserById(email);
        if (exist) {
            return res.status(404).json('User already exist');
        }
        const user = await authService.createUser(email, password, firstName, lastName);
        res.status(200).json(user);
    } catch (e) {
        next(e);
    }
};

const logOut = async(req, res, next) => {
    try {

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