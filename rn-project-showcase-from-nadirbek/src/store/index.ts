import {
  FLUSH,
  PAUSE,
  PURGE,
  PERSIST,
  REGISTER,
  REHYDRATE,
  persistStore,
  persistReducer,
} from 'redux-persist';
import { productsApi } from 'store/product/api';
import { reducerPaths } from 'constants/reducerPaths';
import { setupListeners } from '@reduxjs/toolkit/query';
import { dictionariesApi } from 'store/dictionaries/api';
import { combineReducers, configureStore } from '@reduxjs/toolkit';
import AsyncStorage from '@react-native-async-storage/async-storage';

const persistConfig = {
  key: 'root',
  blacklist: [productsApi.reducerPath, dictionariesApi.reducerPath],
  storage: AsyncStorage,
};

const rootReducer = combineReducers({
  [reducerPaths.products]: productsApi.reducer,
  [reducerPaths.dictionaries]: dictionariesApi.reducer,
});

export const store = configureStore({
  reducer: persistReducer(persistConfig, rootReducer),
  middleware: getDefaultMiddleware =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    })
      .concat(productsApi.middleware)
      .concat(dictionariesApi.middleware),
});
export const persistor = persistStore(store);

export type RootState = ReturnType<typeof rootReducer>;
export type AppDispatch = typeof store.dispatch;

setupListeners(store.dispatch);
