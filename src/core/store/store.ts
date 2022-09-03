import { configureStore } from '@reduxjs/toolkit';
import { tasksSlice } from './reducers/tasks';
import { setPreloadedState, subscriptionListener } from './store.utils';

export const store = configureStore({
  devTools: true,
  preloadedState: setPreloadedState(),
  reducer: {
    [tasksSlice.name]: tasksSlice.reducer,
  },
});

store.subscribe(subscriptionListener);
