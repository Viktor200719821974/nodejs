const express = require("express");

const loginUser = async(req, res, next) => {
    try {
        // const { email, password } = req.body;
        // res.status(200).json('hello');
        res.send('hello');
    } catch (e) {
        next(e);
    }
};

const registrationUser = async(req, res, next) => {
    try {
        res.send('Hello');
    } catch (e) {
        next(e);
    }
};

const forgetPasswordUser = async(req, res, next) => {
    try {
        res.send('Hello');
    } catch (e) {
        next(e);
    }
};

module.exports = { loginUser, registrationUser, forgetPasswordUser, };