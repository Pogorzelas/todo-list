import React from 'react'
import { Box, Button, TextField } from '@mui/material'
import { useTaskInputManager } from './TaskInput.hooks'

function TaskInput() {
  const { value, handleChange, handleAdd } = useTaskInputManager()

  return (
    <Box>
      <TextField size="small" value={value} onChange={handleChange} />
      <Button onClick={handleAdd}>Add</Button>
    </Box>
  )
}

export default TaskInput
