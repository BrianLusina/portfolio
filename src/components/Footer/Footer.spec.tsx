import { render, screen } from '@testing-library/react';
import Footer from './Footer';

describe('Footer', () => {
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
    render(<Footer />);

    const copyrightText = screen.getByText(`Copyright © ${new Date().getFullYear()} TheLusina. All Rights Reserved.`);
    expect(copyrightText).toBeInTheDocument();
  });
});
