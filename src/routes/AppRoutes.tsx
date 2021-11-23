import { FunctionComponent } from 'react';
import { Route } from 'react-router-dom';
import routes from '@routes';
import RouteErrorBoundary from '@components/Errors/RouteErrorBoundary';

const AppRoutes: FunctionComponent = () => {
  return (
    <>
      {routes.map(({ path, component, exact }) => (
        <RouteErrorBoundary key={path} location={path}>
          <Route exact={exact} path={path} component={component} />
        </RouteErrorBoundary>
      ))}
    </>
  );
};

export default AppRoutes;
