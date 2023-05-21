import { Todo, Progress, Completed } from '../features/features';

export const TaskNames = [
  {
    title: 'list the todo tasks',
    id: 'list',
    Card: Todo,
  },
  {
    title: 'todo tasks in progress',
    id: 'progress',
    Card: Progress,
  },
  {
    title: 'todo tasks  completed',
    id: 'completed',
    Card: Completed,
  },
];
