import React from 'react'
import { Box, Button } from '@mui/material'
import { Task } from '../../../Tasks.types'
import { TaskStatus } from '../../../Tasks.enums'

type Props = {
  task: Task
  changeTaskStatus: (task: Task, statusToChange: TaskStatus) => void
  removeTask: (id: string) => void
}

function TaskItem({ task, changeTaskStatus, removeTask }: Props) {
  return (
    <Box>
      {task.name}
      {task.status !== TaskStatus.TODO && (
        <Button onClick={() => changeTaskStatus(task, TaskStatus.TODO)}>
          todo
        </Button>
      )}
      {task.status !== TaskStatus.IN_PROGRESS && (
        <Button onClick={() => changeTaskStatus(task, TaskStatus.IN_PROGRESS)}>
          in progres
        </Button>
      )}
      {task.status !== TaskStatus.DONE && (
        <Button onClick={() => changeTaskStatus(task, TaskStatus.DONE)}>
          done
        </Button>
      )}
      <Button onClick={() => removeTask(task.id)}>delete</Button>
    </Box>
  )
}

export default TaskItem
