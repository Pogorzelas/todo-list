import React, { Dispatch } from 'react'
import { Box, Button, TextField } from '@mui/material'
import { useTaskInputManager } from './TaskInput.hooks'
import { Task } from '../Tasks.types'

type Props = {
  setTask: Dispatch<Task>
}

function TaskInput({ setTask }: Props) {
  const { value, handleChange, handleAdd } = useTaskInputManager(setTask)

  return (
    <Box>
      <TextField value={value} onChange={handleChange} />
      <Button onClick={handleAdd}>Add</Button>
    </Box>
  )
}

export default TaskInput
