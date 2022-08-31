import React from 'react'
import TaskInput from './TaskInput/TaskInput.component'
import { useTasksManger } from './Tasks.utils'

function Tasks() {
  const { tasks, setTask } = useTasksManger()

  return (
    <div>
      <TaskInput setTask={setTask} />
      {tasks.map((task) => (
        <div key={task.id}>
          <div>{task.id}</div>
          <div>{task.value}</div>
          <div>{task.status}</div>
        </div>
      ))}
    </div>
  )
}

export default Tasks
