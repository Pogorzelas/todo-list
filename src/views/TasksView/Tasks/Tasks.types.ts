import { TaskStatus } from './Tasks.enums'

type Task = {
  id: string
  name: string
  status: TaskStatus
}

export type { Task }
