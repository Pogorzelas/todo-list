import { PayloadAction, createSlice } from '@reduxjs/toolkit';
import { Task } from './tasks.types';
import { TaskStatus } from './tasks.enums';

type State = {
  entities: Task[];
}

const initialState: State = {
  entities: [],
};

const tasksSlice = createSlice({
  name: 'tasks',
  initialState,
  reducers: {
    addTask: (state, action: PayloadAction<Task>) => {
      state.entities.push(action.payload);
    },
    changeTaskStatus: (
      state,
      action: PayloadAction<{
        id: string;
        statusToChange: TaskStatus;
      }>,
    ) => {
      const taskIndex = state.entities.findIndex(
        entity => entity.id === action.payload.id,
      );

      const isTaskFound = taskIndex > -1;

      if (isTaskFound) {
        state.entities[taskIndex].status = action.payload.statusToChange;
      }
    },
    removeTask: (state, action: PayloadAction<{ id: string; }>) => {
      state.entities = state.entities.filter(
        entity => entity.id !== action.payload.id,
      );
    },
  },
});

export { tasksSlice };
