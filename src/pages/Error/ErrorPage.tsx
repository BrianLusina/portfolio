import { FunctionComponent } from 'react';
import { ErrorPageContainer, ErrorPageTitle, ErrorPageText, ErrorPageSubtitle } from './styles';
import { ErrorPageProps } from './ErrorPage.types';

const ErrorPage: FunctionComponent<ErrorPageProps> = ({
  title = 'Oops!',
  subtitle='Well, this is embarrassing...',
  message = 'Something terrible went wrong and I regret that you had to experience this! My little bots are working to fix this.',
  cta
}: ErrorPageProps) => {
  return (
    <ErrorPageContainer className="error-page-inner bg_color--4">
      <div className='container'>
        <div className="row">
          <div className="col-lg-12">
            <div className="inner">
              <ErrorPageTitle className='title theme-gradient'>{title}</ErrorPageTitle>
              <ErrorPageSubtitle className='sub-title'>{subtitle}</ErrorPageSubtitle>
              <ErrorPageText>{message}</ErrorPageText>
              {cta ? cta:
                <div className="error-button">
                  <a className="rn-button-style--2 btn-solid" href="/">
                    Back To Homepage
                  </a>
                </div>
              }
            </div>
          </div>
        </div>
      </div>
    </ErrorPageContainer>
  );
};

export default ErrorPage;
