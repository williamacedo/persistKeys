import { applyMiddleware, createStore, compose } from 'redux';
import { offline } from '@redux-offline/redux-offline';
import offlineConfig from '@redux-offline/redux-offline/lib/defaults';
import thunk from 'redux-thunk';
import { persistStore, persistReducer } from 'redux-persist'
import storage from 'redux-persist/lib/storage'

import rootReducer from './Reducers';


const persistConfig = {
  timeout: 10000,
  key: 'root',
  storage,
};

const persistedReducer = persistReducer(persistConfig, rootReducer)

const store = createStore(
  persistedReducer,
  {},
  compose(
    applyMiddleware(thunk),
    offline(offlineConfig)
  )
);

const persistor = persistStore(store);

export { persistor, store };
