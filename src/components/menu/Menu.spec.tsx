import { render, screen } from '@testing-library/react';
import MockAppWithRouter from '@testUtils/MockAppWithRouter';
import faker from 'faker';
import Menu from './Menu';

describe('Menu', () => {
  it('should render with provided menu info displayed', () => {
    const props = {
      items: [
        {
          link: faker.internet.url(),
          label: 'Blog',
          isExternal: true,
        },
        {
          link: faker.internet.url(),
          label: 'Projects',
          isExternal: true,
        },
        {
          link: faker.internet.url(),
          label: 'Journal',
          isExternal: true,
        },
        {
          link: faker.internet.url(),
          label: 'OSS',
          isExternal: true,
        },
        {
          link: faker.internet.url(),
          label: 'Work',
          isExternal: false,
        },
        {
          link: faker.internet.url(),
          label: faker.lorem.word(),
          isExternal: false,
        },
      ],
    };

    render(
      <MockAppWithRouter>
        <Menu {...props} />
      </MockAppWithRouter>,
    );

    const menuTitleElement = screen.getByText(/Menu/);
    expect(menuTitleElement).toBeInTheDocument();

    props.items.forEach((item) => {
      const menuItemLabelElement = screen.getByText(item.label);
      expect(menuItemLabelElement).toBeInTheDocument();
    });
  });
});
