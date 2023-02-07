import { GET_REPOSITORIES } from '@graphQl/queries';
import { render, screen } from '@testing-library/react';
import MockApp from '@testUtils/MockApp';
import { MockedResponseType } from '@testUtils/MockAppWithGqlProvider';
import ProjectList from './ProjectList';

describe('ProjectList', () => {
  beforeAll(() => {
    // eslint-disable-next-line @typescript-eslint/no-empty-function
    jest.spyOn(console, 'error').mockImplementation(() => {});
  });

  afterAll(() => {
    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    // @ts-ignore
    console.error.mockRestore();
  });

  afterEach(() => {
    jest.resetAllMocks();
    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    // @ts-ignore
    console.error.mockClear();
  });

  it('should render', () => {
    const projectMock: MockedResponseType[] = [];
    render(
      <MockApp mocks={projectMock}>
        <ProjectList />
      </MockApp>,
    );
  });

  it('should render list of projects', async () => {
    const projectMock: MockedResponseType[] = [
      {
        request: {
          query: GET_REPOSITORIES,
          variables: {
            direction: 'ASC',
            field: 'NAME',
            first: 20,
          },
        },
        result: {
          data: {
            viewer: {
              repositories: {
                pageInfo: {
                  hasNextPage: false,
                },
                nodes: [
                  {
                    name: 'Sample Project 1',
                    description: 'Space Ships',
                    url: 'spaceships.com',
                    owner: {
                      login: 'test',
                      avatarUrl: 'https://avatars0.githubusercontent.com/u/1234?v=4',
                    },
                  },
                  {
                    name: 'Sample Project 2',
                    description: 'Space Ships & Stones',
                    url: 'spaceshipsandstones.com',
                    owner: {
                      login: 'test 2',
                      avatarUrl: 'https://avatars0.githubusercontent.com/u/1234?v=4',
                    },
                  },
                ],
              },
            },
          },
        },
      },
    ];

    render(
      <MockApp mocks={projectMock}>
        <ProjectList />
      </MockApp>,
    );

    await new Promise((resolve) => setTimeout(resolve, 0));

    const projectNameText1 = screen.getByText('Sample Project 1');
    const projectNameText2 = screen.getByText('Sample Project 2');

    expect(projectNameText1).toBeInTheDocument();
    expect(projectNameText2).toBeInTheDocument();
  });
});
