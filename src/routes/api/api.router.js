import express from 'express';
import userRouter from './user.router.js';
import projectRouter from './project.router.js'
import transactionRouter from './transaction.router.js'

const router = express.Router();
router.use('/users', userRouter);
router.use('/projects', projectRouter);
router.use('/transactions', transactionRouter);
router.use('/rewards', transactionRouter);

export default router;