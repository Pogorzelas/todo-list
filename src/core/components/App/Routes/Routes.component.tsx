import { Route, Switch } from 'react-router';
import { RoutePath } from './Routes.enums';
import TasksView from '../../../../views/TasksView';

function Routes() {
  return (
    <Switch>
      <Route
        path={RoutePath.Home}
        component={TasksView}
      />
      <Route
        path={RoutePath.TaskDetails}
      />
    </Switch>
  );
}

export default Routes;
