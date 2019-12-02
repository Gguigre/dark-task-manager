import { RootState } from '../reducers';
import { Task } from './reducer';

const tasksSelector = (state: RootState) => state.tasks;

export const currentTaskSelector = (state: RootState): Task | undefined => {
  const tasksState = tasksSelector(state);
  const currentTaskId = tasksState.currentTaskId;
  return currentTaskId ? tasksState.tasks[currentTaskId] : undefined;
};
