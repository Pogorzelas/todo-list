import React from 'react'
import TaskInput from './TaskInput'
import { useTasksManger } from './Tasks.utils'
import { Box } from '@mui/material'
import TaskLists from './TaskLists'

function Tasks() {
  const { tasks, setTask, changeTaskStatus, removeTask } = useTasksManger()

  return (
    <Box>
      <TaskInput setTask={setTask} />
      <TaskLists
        tasks={tasks}
        changeTaskStatus={changeTaskStatus}
        removeTask={removeTask}
      />
    </Box>
  )
}

export default Tasks
