import React from 'react';
import { render, screen } from '@testing-library/react';
import Button from '../Button';

test('Button renders with same title passed as prop', () => {
  const title = 'my title';
  render(<Button title={title} />);
  const ButtonElement = screen.getByText(/my title/i);
  expect(ButtonElement).toBeInTheDocument();
});
