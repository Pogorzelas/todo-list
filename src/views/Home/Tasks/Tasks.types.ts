import { TasksStatus } from './Tasks.enums'

type Task = {
  id: string
  value: string
  status: TasksStatus
}

export type { Task }
