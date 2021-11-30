import { render, screen } from '@testing-library/react';
import faker from 'faker';
import MetaInfo from './MetaInfo';

describe('MetaInfo', () => {
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
