import { render, screen } from '@testing-library/react';
import MockAppWithRouter from '@testUtils/MockAppWithRouter';
import faker from 'faker';
import Tile from './Tile';

describe('Tile', () => {
  beforeAll(() => {
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
    const title = faker.lorem.word();
    const description = faker.lorem.sentence();
    const poster = faker.image.imageUrl();
    const link = faker.internet.url();

    const { getAllByRole  } = render(
      <MockAppWithRouter>
        <Tile title={title} description={description} poster={poster} link={link} />
      </MockAppWithRouter>,
    );

    const titleElement = screen.getByText(title);
    const descriptionElement = screen.getByText(description);
    // const posterElement = screen.getByAltText(title);
    const linkElements = getAllByRole('link');

    expect(titleElement).toBeInTheDocument();
    expect(descriptionElement).toBeInTheDocument();
    // expect(posterElement).toBeInTheDocument();
    linkElements.forEach((linkElement) => {
      expect(linkElement).toBeInTheDocument();
    })
  });
});
