const express  = require("express");
const router = express.Router();
const authRouter = require('./authRouter');
const usersRouter = require('./usersRouter');

router.use('/auth', authRouter);
router.use('/users', usersRouter);

module.exports = router;