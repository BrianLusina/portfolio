import { render, screen } from '@testing-library/react';
import faker from 'faker';
import MetaInfo from './MetaInfo';

describe('MetaInfo', () => {
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

  it('should render with provided meta info displayed', () => {
    const props = {
      author: {
        name: faker.name.firstName(),
        url: faker.internet.url(),
      },
      project: {
        name: faker.company.companyName(),
        url: faker.internet.url(),
      },
      description: faker.lorem.sentence(),
    };

    render(<MetaInfo {...props} />);

    const authorTextElement = screen.getByText(props.author.name);
    expect(authorTextElement).toBeInTheDocument();

    const descriptionTextElement = screen.getByText(props.description);
    expect(descriptionTextElement).toBeInTheDocument();
  });
});
