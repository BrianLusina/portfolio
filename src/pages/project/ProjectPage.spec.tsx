import { render } from '@testing-library/react';
import MockApp from '@testUtils/MockApp';
import { MockedResponseType } from '@testUtils/MockAppWithGqlProvider';
import ProjectPage from './ProjectPage';

xdescribe('ProjectPage', () => {
  const projectMock: MockedResponseType[] = [];

  // FIXME: SyntaxError: Cannot use import statement outside a module
  xit('should render', () => {
    render(
      <MockApp mocks={projectMock}>
        <ProjectPage />
      </MockApp>,
    );
  });
});
