import express from 'express';
import * as taskController from '../controllers/taskController.js';
import { validateTask, validateTaskQuery } from '../middleware/validateTask.js';

const router = express.Router();

// Apply the query validation middleware here
router.get('/', validateTaskQuery, taskController.getTasks);
router.post('/', validateTask, taskController.createTask);


export default router;