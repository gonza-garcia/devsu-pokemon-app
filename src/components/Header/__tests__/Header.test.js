import React from 'react';
import { render, screen } from '@testing-library/react';
import Header from '../Header';

test('Header renders with same title passed as prop', () => {
  const title = 'my title';
  render(<Header title={title} />);
  const headerElement = screen.getByText(/my title/i);
  expect(headerElement).toBeInTheDocument();
});
