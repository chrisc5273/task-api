import * as taskService from '../services/taskService.js';

export async function getTasks(req, res, next) {
  // Extract the query parameter
  const { completed } = req.query;
  
  let completedFilter;
  // Convert the string to a boolean if it was provided
  if (completed === 'true') completedFilter = true;
  if (completed === 'false') completedFilter = false;

  // Pass the filter down to the service
  const tasks = await taskService.getAllTasks(completedFilter);
  res.json(tasks);
}

export async function createTask(req, res, next) {
  const { title, completed } = req.body;
  const task = await taskService.createTask({ title, completed });
  res.status(201).json(task);
}