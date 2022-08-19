import React from 'react';
import { render, screen } from '@testing-library/react';
import Footer from '../Footer';

test('Footer renders with same title passed as prop', () => {
  const title = 'my title';
  render(<Footer title={title} />);
  const footerElement = screen.getByText(/my title/i);
  expect(footerElement).toBeInTheDocument();
});
