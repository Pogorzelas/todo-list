import { ChangeEvent, Dispatch, useState } from 'react'
import { Task } from '../Tasks.types'
import { generateId } from '../../../../shared/utils/generateId'
import { TaskStatus } from '../Tasks.enums'

function useTaskInputManager(setTask: Dispatch<Task>) {
  const [value, setValue] = useState('')

  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    const { value } = event.target
    setValue(value)
  }

  const handleAdd = () => {
    const task: Task = {
      id: generateId(),
      status: TaskStatus.TODO,
      value,
    }
    setTask(task)
    setValue('')
  }

  return {
    value,
    handleChange,
    handleAdd,
  }
}

export { useTaskInputManager }
