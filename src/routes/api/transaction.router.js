import express from 'express';
import { asyncHandler } from '../../utils/asyncHandler.js';
import TransactionController from '../../controllers/transaction.controller.js';

const router = express.Router();
router.post('/', asyncHandler(TransactionController.addNewTransaction));

export default router;