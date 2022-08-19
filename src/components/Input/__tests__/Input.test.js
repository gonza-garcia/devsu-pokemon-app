import React from 'react';
import { render, screen } from '@testing-library/react';
import Input from '../Input';

test('Input renders with same title passed as prop', () => {
  const title = 'my title';
  render(<Input title={title} />);
  const InputElement = screen.getByText(/my title/i);
  expect(InputElement).toBeInTheDocument();
});
