const jwt = require("jsonwebtoken");

const config = require("../constants");
const db = require("../models/index");

const generateTokenPair = async(email, userId) => {
    const payload = { email, userId };
    const accessToken = jwt.sign(
        payload,
        config.SECRET_ACCESS_KEY,
        { expiresIn: '10m'}
    );
    const refreshToken = jwt.sign(
        payload,
        config.SECRET_REFRESH_KEY,
        { expiresIn: '24h'}
    );
    return {
        accessToken,
        refreshToken,
    };
};

const saveTokens = async(accessToken, refreshToken, userId) => {
    console.log(accessToken, 'save tokens');
    console.log("save tokens");
    await db.Tokens.create({ accessToken, refreshToken, userId } );
};

const verifyToken = async(authToken, tokenType) => {
    let secretWord = config.SECRET_ACCESS_KEY;
    if (tokenType === 'refreshToken') {
        secretWord = config.SECRET_REFRESH_KEY;
    }
    return jwt.verify(authToken, secretWord);
}

module.exports = {
    generateTokenPair,
    saveTokens,
    verifyToken,
};