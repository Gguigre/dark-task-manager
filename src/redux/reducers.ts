import { Action, combineReducers } from 'redux';
import { loadingStatusReducer, LoadingStatusState } from './LoadingStatus/reducer';
import { TasksState, tasksReducer } from './Tasks/reducer';

const appReducer = combineReducers({
  loadingStatus: loadingStatusReducer,
  tasks: tasksReducer,
});

export interface RootState {
  loadingStatus: LoadingStatusState;
  tasks: TasksState;
}

type RootReducer = ReturnType<typeof appReducer>;

export const rootReducer = (state: RootState | undefined, action: Action): RootReducer => {
  return appReducer(state, action);
};
