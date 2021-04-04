import { BrowserRouter, Route, Switch } from 'react-router-dom';

import MainLayout from './layouts/MainLayout';

import Home from './pages/Home';
import Api1 from './pages/Api1';
import Api2 from './pages/Api2';

// Home
export const homePath = '/';
export const api1Path = '/api1/';
export const api2Path = '/api2/';

const Routes = () => {
  return (
    <BrowserRouter>
      <Route>
        <Switch>
          <MainLayout>
            <Route path={homePath} exact component={Home} />
            <Route path={api1Path} component={Api1} />
            <Route path={api2Path} component={Api2} />
          </MainLayout>
        </Switch>
      </Route>
    </BrowserRouter>
  );
};

export default Routes;
