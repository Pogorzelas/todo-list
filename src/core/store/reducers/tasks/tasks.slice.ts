import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { ReducerName } from '../reducers.enums'
import { Task } from './tasks.types'
import { TaskStatus } from './tasks.enums'

type State = {
  tasks: Task[]
}

const initialState: State = {
  tasks: [],
}

const tasksSlice = createSlice({
  name: ReducerName.Tasks,
  initialState,
  reducers: {
    addTask: (state, action: PayloadAction<Task>) => {
      state.tasks.push(action.payload)
    },
    changeTaskStatus: (
      state,
      action: PayloadAction<{
        id: string
        statusToChange: TaskStatus
      }>
    ) => {
      const taskIndex = state.tasks.findIndex(
        (task) => task.id === action.payload.id
      )

      const isTaskFound = taskIndex > -1

      if (isTaskFound) {
        state.tasks[taskIndex].status = action.payload.statusToChange
      }
    },
    removeTask: (state, action: PayloadAction<{ id: string }>) => {
      state.tasks = state.tasks.filter((task) => task.id !== action.payload.id)
    },
  },
})

export { tasksSlice }
