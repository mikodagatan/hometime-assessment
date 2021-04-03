import { BrowserRouter, Route, Switch } from 'react-router-dom';

import MainLayout from './layouts/MainLayout';
import DashboardLayout from './layouts/DashboardLayout';

import ThemePage from './pages/ThemePage';
import Home from './pages/Home';
import Dashboard from './pages/dashboard/Dashboard';
import About from './pages/About';
import Login from './pages/Login';

// Home
export const homePath = '/';
export const loginPath = '/login/';
export const aboutPath = '/about/';

// Dashboard
export const dashboardPath = '/dashboard/';
export const dashboardThemePath = '/dashboard/theme';
export const dashboardDeviceManagerPath = '/dashboard/device-manager/';
export const dashboardConfigureSensorsPath = '/dashboard/configure-sensors/';
export const dashboardAccountSettingsPath = '/dashboard/account-settings/';

const Routes = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/dashboard/:path?" exact>
          <DashboardLayout>
            <Switch>
              <Route path={dashboardPath} exact component={Dashboard} />
              <Route path={dashboardThemePath} component={ThemePage} />
              <Route path={dashboardDeviceManagerPath} component={ThemePage} />
              <Route
                path={dashboardConfigureSensorsPath}
                component={ThemePage}
              />
              <Route
                path={dashboardAccountSettingsPath}
                component={ThemePage}
              />
            </Switch>
          </DashboardLayout>
        </Route>
        <Route>
          <Switch>
            <MainLayout>
              <Route path={homePath} exact component={Home} />
              <Route path={aboutPath} component={About} />
            </MainLayout>
            <Route path={loginPath} component={Login} />
          </Switch>
        </Route>
        <Route></Route>
      </Switch>
    </BrowserRouter>
  );
};

export default Routes;
