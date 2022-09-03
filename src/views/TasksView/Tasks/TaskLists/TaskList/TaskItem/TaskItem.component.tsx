import React from 'react'
import { Box, Button } from '@mui/material'
import { TaskStatus } from '../../../Tasks.enums'
import { useTaskItemManager } from './TaskItem.hooks'

type Props = {
  id: string
  name: string
  status: TaskStatus
}

function TaskItem({ id, name, status }: Props) {
  const { handleRemoveTask, handleChangeTaskStatus } = useTaskItemManager(id)

  return (
    <Box>
      {name}
      {status !== TaskStatus.TODO && (
        <Button onClick={handleChangeTaskStatus(TaskStatus.TODO)}>todo</Button>
      )}
      {status !== TaskStatus.IN_PROGRESS && (
        <Button onClick={handleChangeTaskStatus(TaskStatus.IN_PROGRESS)}>
          in progres
        </Button>
      )}
      {status !== TaskStatus.DONE && (
        <Button onClick={handleChangeTaskStatus(TaskStatus.DONE)}>done</Button>
      )}
      <Button onClick={handleRemoveTask}>delete</Button>
    </Box>
  )
}

export default TaskItem
