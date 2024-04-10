import storage from 'redux-persist/lib/storage';
import {
  persistStore,
  persistReducer,
} from 'redux-persist';
import { composeWithDevTools } from 'redux-devtools-extension';
import { createStore } from 'redux';

import rootReducer from './reducers';
import { PERSIST_KEY } from './constants';

const persist = {
  key: PERSIST_KEY,
  storage,
};

const reducers = persistReducer(persist, rootReducer);

export const store = createStore(reducers, composeWithDevTools());
export const persistor = persistStore(store);
