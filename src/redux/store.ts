import { createStore, applyMiddleware } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import { persistStore, persistReducer } from 'redux-persist';
import AsyncStorage from '@react-native-community/async-storage';
import { middlewares, sagaMiddleware } from './middlewares';

import { rootReducer } from './reducers';
import { rootSaga } from './sagas';

export const persistConfig = {
  key: 'root',
  storage: AsyncStorage,
  whitelist: [],
};

const persistedReducer = persistReducer(persistConfig, rootReducer);

export const store = createStore(
  persistedReducer,
  composeWithDevTools(applyMiddleware(...middlewares))
);
export const persistor = persistStore(store);

sagaMiddleware.run(rootSaga);
