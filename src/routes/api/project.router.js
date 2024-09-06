import express from 'express';
import { asyncHandler } from '../../utils/asyncHandler.js';
import ProjectController from '../../controllers/project.controller.js';

const router = express.Router();
router.post('/', asyncHandler(ProjectController.addNewProject));

export default router;