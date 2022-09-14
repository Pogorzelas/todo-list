import { configureStore } from '@reduxjs/toolkit';
import { setPreloadedState, subscriptionListener } from './store.utils';
import { combinedReducer } from './reducers';

const store = configureStore({
  devTools: true,
  preloadedState: setPreloadedState(),
  reducer: combinedReducer,
});

store.subscribe(subscriptionListener);

export { store };
