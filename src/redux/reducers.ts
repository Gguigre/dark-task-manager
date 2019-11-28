import { Action, combineReducers } from 'redux';
import { loadingStatusReducer, LoadingStatusState } from './LoadingStatus/reducer';

const appReducer = combineReducers({
  loadingStatus: loadingStatusReducer,
});

export interface RootState {
  loadingStatus: LoadingStatusState;
}

type RootReducer = ReturnType<typeof appReducer>;

export const rootReducer = (state: RootState | undefined, action: Action): RootReducer => {
  return appReducer(state, action);
};
