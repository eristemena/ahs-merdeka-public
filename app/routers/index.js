const express = require('express');
const cors = require('cors');

const masterRouter = require('./master');
const authRouter = require('./auth');
const merchantRouter = require('./merchant');
const usersRouter = require('./user');
const productRouter = require('./product');
const transactionRouter = require('./transaction');

const router = express.Router();

router.use(cors())

router.use('/api/v1/master', masterRouter);
router.use('/api/v1/auth', authRouter);
router.use('/api/v1/merchants', merchantRouter);
router.use('/api/v1/users', usersRouter);
router.use('/api/v1/products', productRouter);
router.use('/api/v1/transactions', transactionRouter);

module.exports = router;