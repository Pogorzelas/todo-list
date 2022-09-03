import { useAppDispatch } from '../../store.hooks'
import { tasksSlice } from './tasks.slice'
import { useCallback } from 'react'
import { Task } from './tasks.types'
import { TaskStatus } from './tasks.enums'

const useTasksAction = () => {
  const dispatch = useAppDispatch()

  const addTask = useCallback(
    (task: Task) => {
      dispatch(tasksSlice.actions.addTask(task))
    },
    [dispatch]
  )

  const removeTask = useCallback(
    (id: string) => {
      dispatch(tasksSlice.actions.removeTask({ id }))
    },
    [dispatch]
  )

  const changeTaskStatus = useCallback(
    (id: string, statusToChange: TaskStatus) => {
      dispatch(tasksSlice.actions.changeTaskStatus({ id, statusToChange }))
    },
    [dispatch]
  )

  return {
    addTask,
    removeTask,
    changeTaskStatus,
  }
}

export { useTasksAction }
