import { FunctionComponent } from 'react';
import ErrorPage from './ErrorPage';

const NotFoundPage: FunctionComponent = () => {
  return (
    <ErrorPage
      title="404"
      subtitle="Page does not exist"
      message="Little bots scoured this site, but could not find the page you are looking for"
      cta={
        <div className="error-button">
          <a className="rn-button-style--2 btn-solid" href="/">
            Back To Homepage
          </a>
        </div>
      }
    />
  );
};

export default NotFoundPage;
