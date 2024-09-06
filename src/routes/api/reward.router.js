import express from 'express';
import { asyncHandler } from '../../utils/asyncHandler.js';
import RewardController from '../../controllers/reward.controller.js';

const router = express.Router();
router.get('/calculate', asyncHandler(RewardController.calculate));

export default router;