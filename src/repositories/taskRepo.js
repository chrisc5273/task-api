import prisma from '../config/db.js';

export async function findAll(completedFilter) {
// If a filter is provided (true or false), apply it to the where clause.
  // If it is undefined, pass an empty object to return all tasks.
  const whereClause = completedFilter !== undefined 
    ? { completed: completedFilter } 
    : {};

  return prisma.task.findMany({
    where: whereClause
  });}

// Create a new task
export async function create(data) {
  return prisma.task.create({
    data,
  });
}
