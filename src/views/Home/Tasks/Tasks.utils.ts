import { Task } from './Tasks.types'
import { useLocalStorage } from 'usehooks-ts'
import { TASKS_LOCAL_STORAGE_KEY } from './Tasks.config'
import { TaskStatus } from './Tasks.enums'

function useTasksManger() {
  const [tasks, setTasks] = useLocalStorage<Task[]>(TASKS_LOCAL_STORAGE_KEY, [])

  const setTask = (task: Task) => {
    setTasks((previousTasks) => [...previousTasks, task])
  }

  const removeTask = (id: string) => {
    setTasks((tasks) => tasks.filter((task) => task.id !== id))
  }

  const changeTaskStatus = (task: Task, statusToChange: TaskStatus) => {
    setTasks((previousTasks) => {
      const currentTasks = [...previousTasks]

      const indexOfTask = currentTasks.indexOf(task)

      if (indexOfTask > -1) {
        currentTasks[indexOfTask] = {
          ...task,
          status: statusToChange,
        }
      }

      return currentTasks
    })
  }

  return {
    tasks,
    setTask,
    removeTask,
    changeTaskStatus,
  }
}

export { useTasksManger }
