import { render, screen } from '@testing-library/react';
import MockAppWithRouter from '@testUtils/MockAppWithRouter';
import faker from 'faker';
import Tile from './Tile';

describe('Tile', () => {
  it('should render', () => {
    const title = faker.lorem.word();
    const description = faker.lorem.sentence();
    const poster = faker.image.imageUrl();
    const link = faker.internet.url();

    render(
      <MockAppWithRouter>
        <Tile title={title} description={description} poster={poster} link={link} />
      </MockAppWithRouter>,
    );

    const titleElement = screen.getByText(title);
    const descriptionElement = screen.getByText(description);
    const posterElement = screen.getByAltText(title);
    const linkElement = screen.getByRole('link');

    expect(titleElement).toBeInTheDocument();
    expect(descriptionElement).toBeInTheDocument();
    expect(posterElement).toBeInTheDocument();
    expect(linkElement).toBeInTheDocument();
  });
});
