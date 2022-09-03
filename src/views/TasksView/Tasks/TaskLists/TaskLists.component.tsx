import React from 'react'
import { TaskStatus } from '../Tasks.enums'
import TaskList from './TaskList'
import { StyledContainer } from './TaskLists.styles'

function TaskLists() {
  return (
    <StyledContainer>
      <TaskList title="Todo" listStatus={TaskStatus.TODO} />
      <TaskList title="In Progress" listStatus={TaskStatus.IN_PROGRESS} />
      <TaskList title="Done" listStatus={TaskStatus.DONE} />
    </StyledContainer>
  )
}

export default TaskLists
