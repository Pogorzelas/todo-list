import { Box, Typography } from '@mui/material'
import React from 'react'
import { Task } from '../../Tasks.types'
import { TaskStatus } from '../../Tasks.enums'
import TaskItem from './TaskItem'
import { filterTasksByStatus } from './TaskList.utils'

type Props = {
  listStatus: TaskStatus
  title: string
  tasks: Task[]
  changeTaskStatus: (task: Task, statusToChange: TaskStatus) => void
  removeTask: (id: string) => void
}

function TaskList({
  listStatus,
  title,
  tasks,
  changeTaskStatus,
  removeTask,
}: Props) {
  const filteredTasks = filterTasksByStatus(tasks, listStatus)

  return (
    <Box>
      <Typography variant="h3">{title}</Typography>
      {filteredTasks.map((task) => (
        <TaskItem
          key={task.id}
          task={task}
          changeTaskStatus={changeTaskStatus}
          removeTask={removeTask}
        />
      ))}
    </Box>
  )
}

export default TaskList
