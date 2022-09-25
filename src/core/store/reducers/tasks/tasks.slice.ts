import type { PayloadAction } from '@reduxjs/toolkit';
import { createSlice } from '@reduxjs/toolkit';
import type { Task, TaskPayload } from './tasks.types';
import type { TaskStatus } from './tasks.enums';
import { generateId } from '../../../../shared/utils/generateId';

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
    addTask: (state, action: PayloadAction<TaskPayload>) => {
      state.entities.push({
        id: generateId(),
        ...action.payload,
      });
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
