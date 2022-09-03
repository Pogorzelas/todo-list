import { configureStore } from '@reduxjs/toolkit'
import { tasksSlice } from './reducers/tasks'

export const store = configureStore({
  reducer: {
    [tasksSlice.name]: tasksSlice.reducer,
  },
})
