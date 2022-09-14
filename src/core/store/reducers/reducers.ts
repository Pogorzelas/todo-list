import { tasksSlice } from './tasks';

const combinedReducer = {
  [tasksSlice.name]: tasksSlice.reducer,
};

export { combinedReducer };
