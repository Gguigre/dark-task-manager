import { action, ActionType } from 'typesafe-actions';
import { Task } from './reducer';

export const setCurrentTask = (taskId: string) => action('SET_CURRENT_TASK', { taskId });
export const addTask = (task: Task) => action('ADD_TASK', { task });
export const StopCurrentTask = () => action('STOP_CURRENT_TASK');

const actions = {
  setCurrentTask,
  addTask,
  StopCurrentTask,
};

export type TasksActions = ActionType<typeof actions>;
