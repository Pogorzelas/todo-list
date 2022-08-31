import React from 'react'
import Layout from '../../core/components/Layout'
import { StyledContainer } from './Home.styles'
import Tasks from './Tasks'

function Home() {
  return (
    <Layout>
      <StyledContainer>
        <Tasks />
      </StyledContainer>
    </Layout>
  )
}

export default Home
