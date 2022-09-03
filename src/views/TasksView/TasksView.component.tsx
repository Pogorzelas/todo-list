import React from 'react'
import Layout from '../../core/components/Layout'
import { StyledContainer } from './TasksView.styles'
import Tasks from './Tasks'

function TasksView() {
  return (
    <Layout>
      <StyledContainer>
        <Tasks />
      </StyledContainer>
    </Layout>
  )
}

export default TasksView
