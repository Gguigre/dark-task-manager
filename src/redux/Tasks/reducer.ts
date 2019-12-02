import { createReducer } from 'typesafe-actions';
import { TasksActions } from './actions';

export interface Task {
  id: string;
  title: string;
  startTime: Date;
  endTime: Date | null;
}

export interface TasksState {
  currentTaskId: null | string;
  tasks: { [id: string]: Task };
}

export const initialState = {
  currentTaskId: 'toto',
  tasks: {
    toto: { id: 'toto', title: 'toto', startTime: new Date(1575295924918), endTime: null },
  },
};

export const tasksReducer = createReducer<TasksState, TasksActions>(initialState, {
  SET_CURRENT_TASK: (state, action) => ({
    ...state,
    currentTaskId: action.payload.taskId,
  }),
  ADD_TASK: (state, action) => ({
    ...state,
    tasks: {
      ...state.tasks,
      [action.payload.task.id]: action.payload.task,
    },
  }),
  STOP_CURRENT_TASK: state => {
    if (!state.currentTaskId) {
      return state;
    }
    return {
      ...state,
      currentTaskId: null,
      tasks: {
        ...state.tasks,
        [state.currentTaskId]: {
          ...state.tasks[state.currentTaskId],
          endTime: new Date(),
        },
      },
    };
  },
});
