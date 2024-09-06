import express from 'express';
import { asyncHandler } from '../../utils/asyncHandler.js';
import UserController from '../../controllers/user.controller.js';

const router = express.Router();
router.post('/', asyncHandler(UserController.addNewUser));

export default router;