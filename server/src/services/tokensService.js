const jwt = require("jsonwebtoken");
require('dotenv').config();

const model = require("../models");

const generateTokenPair = async(email, userId) => {
    const payload = { email, userId };
    const accessToken = jwt.sign(
        payload,
        process.env.SECRET_ACCESS_KEY,
        { expiresIn: '10m'}
    );
    const refreshToken = jwt.sign(
        payload,
        process.env.SECRET_REFRESH_KEY,
        { expiresIn: '24h'}
    );
    return {
        accessToken,
        refreshToken,
    };
};

const saveTokens = async(accessToken, refreshToken, userId) => {
    await model.Token.create({ accessToken, refreshToken, userId } );
};

const verifyToken = async(authToken, tokenType) => {
    let secretWord = config.SECRET_ACCESS_KEY;
    if (tokenType === 'refreshToken') {
        secretWord = config.SECRET_REFRESH_KEY;
    }
    return jwt.verify(authToken, secretWord);
};

const findTokenByUserId = async(userId) => {
    return !!await model.Token.findOne({ where: { userId } });
};

const deleteTokenPair = async(userId) => {
    return await model.Token.destroy({ where: { userId } });
};

module.exports = {
    generateTokenPair,
    saveTokens,
    verifyToken,
    deleteTokenPair,
    findTokenByUserId,
};