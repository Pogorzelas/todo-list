import React from 'react'
import TaskInput from './TaskInput'
import { Box } from '@mui/material'
import TaskLists from './TaskLists'

function Tasks() {
  return (
    <Box>
      <TaskInput />
      <TaskLists />
    </Box>
  )
}

export default Tasks
