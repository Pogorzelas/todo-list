import { Task } from '../../Tasks.types'
import { TaskStatus } from '../../Tasks.enums'

function filterTasksByStatus(tasks: Task[], status: TaskStatus) {
  return tasks.filter((task) => task.status === status)
}

export { filterTasksByStatus }
