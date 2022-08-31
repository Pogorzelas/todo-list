import React from 'react'
import { Route, Switch } from 'react-router'
import { RoutePath } from './Routes.enums'
import Home from '../../../../views/Home'

function Routes() {
  return (
    <Switch>
      <Route path={RoutePath.Home} component={Home} />
      <Route path={RoutePath.TaskDetails} />
    </Switch>
  )
}

export default Routes
