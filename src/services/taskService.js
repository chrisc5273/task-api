import * as taskRepository from '../repositories/taskRepo.js';

export async function getAllTasks(completedFilter) {
  // Pass the filter down to the repository
  return taskRepository.findAll(completedFilter);
}

export async function createTask(newTask) {
  return taskRepository.create(newTask);
}