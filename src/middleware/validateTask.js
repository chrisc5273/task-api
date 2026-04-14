import { body, query } from 'express-validator';
import { checkValidationResults } from './handleValidationErrors.js';

export const validateTask = [
  body('title')
    .trim()
    .escape()
    .notEmpty()
    .withMessage('Title is required')
    .bail()
    .isLength({ min: 3, max: 100 })
    .withMessage('Title must be at least 3 and at most 100 characters'),

  body('completed')
    .optional()
    .isBoolean()
    .withMessage('completed must be true or false'),

  checkValidationResults,
];

// NEW validation for GET /tasks?completed=...
export const validateTaskQuery = [
  query('completed')
    .optional()
    // It comes in as a string from the query, so we check for string representations
    .isIn(['true', 'false']) 
    .withMessage('completed query parameter must be "true" or "false"'),

  checkValidationResults,
];