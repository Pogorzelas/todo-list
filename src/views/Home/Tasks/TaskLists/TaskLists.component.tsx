import React from 'react'
import { Task } from '../Tasks.types'
import { TaskStatus } from '../Tasks.enums'
import TaskList from './TaskList'
import { StyledContainer } from './TaskLists.styles'

type Props = {
  tasks: Task[]
  changeTaskStatus: (task: Task, statusToChange: TaskStatus) => void
  removeTask: (id: string) => void
}

function TaskLists({ tasks, changeTaskStatus, removeTask }: Props) {
  return (
    <StyledContainer>
      <TaskList
        title="Todo"
        listStatus={TaskStatus.TODO}
        tasks={tasks}
        changeTaskStatus={changeTaskStatus}
        removeTask={removeTask}
      />
      <TaskList
        title="In Progress"
        listStatus={TaskStatus.IN_PROGRESS}
        tasks={tasks}
        changeTaskStatus={changeTaskStatus}
        removeTask={removeTask}
      />
      <TaskList
        title="Done"
        listStatus={TaskStatus.DONE}
        tasks={tasks}
        changeTaskStatus={changeTaskStatus}
        removeTask={removeTask}
      />
    </StyledContainer>
  )
}

export default TaskLists
