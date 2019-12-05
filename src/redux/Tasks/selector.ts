import { RootState } from '../reducers';
import { Task } from './reducer';

const tasksSelector = (state: RootState) => state.tasks;

export const currentTaskSelector = (state: RootState): Task | undefined => {
  const tasksState = tasksSelector(state);
  const currentTaskId = tasksState.currentTaskId;
  return currentTaskId ? tasksState.tasks[currentTaskId] : undefined;
};

const sameDay = (d1: Date, d2: Date) => {
  return (
    d1.getFullYear() === d2.getFullYear() &&
    d1.getMonth() === d2.getMonth() &&
    d1.getDate() === d2.getDate()
  );
};

export const doneTodayTasksSelector = (state: RootState): Task[] => {
  const tasksState = tasksSelector(state);
  const now = new Date();

  return Object.keys(tasksState.tasks)
    .map(key => tasksState.tasks[key])
    .filter((task: Task) => {
      return task.endTime && sameDay(now, task.endTime);
    });
};
