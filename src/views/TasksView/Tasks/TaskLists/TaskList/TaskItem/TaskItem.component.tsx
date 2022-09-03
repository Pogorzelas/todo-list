import React from 'react'
import { Box, Button } from '@mui/material'
import { Task } from '../../../Tasks.types'
import { TaskStatus } from '../../../Tasks.enums'
import { useTaskItemManager } from './TaskItem.hooks'

type Props = {
  task: Task
}

function TaskItem({ task }: Props) {
  const { handleRemoveTask, handleChangeTaskStatus } = useTaskItemManager(
    task.id
  )

  return (
    <Box>
      {task.name}
      {task.status !== TaskStatus.TODO && (
        <Button onClick={handleChangeTaskStatus(TaskStatus.TODO)}>todo</Button>
      )}
      {task.status !== TaskStatus.IN_PROGRESS && (
        <Button onClick={handleChangeTaskStatus(TaskStatus.IN_PROGRESS)}>
          in progres
        </Button>
      )}
      {task.status !== TaskStatus.DONE && (
        <Button onClick={handleChangeTaskStatus(TaskStatus.DONE)}>done</Button>
      )}
      <Button onClick={handleRemoveTask}>delete</Button>
    </Box>
  )
}

export default TaskItem
