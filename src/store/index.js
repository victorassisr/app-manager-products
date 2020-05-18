import {createStore, applyMiddleware} from 'redux';
import {persistStore, persistReducer} from 'redux-persist';
import AsyncStorage from '@react-native-community/async-storage';

import reducers from './ducks';

const persistConfig = {
  key: 'project-store',
  storage: AsyncStorage,
  whitelist: ['product', 'cart'],
  timeout: null,
};

const middlewares = [];

const persistedReducer = persistReducer(persistConfig, reducers);
const store = createStore(persistedReducer, applyMiddleware(...middlewares));
const persistor = persistStore(store);

export {store, persistor};
