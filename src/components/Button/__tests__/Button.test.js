import React from 'react';
import { render, screen } from '@testing-library/react';
import Button from '../Button';

it('should render with same label passed as prop', () => {
  const props = {
    label: 'My button',
    variant: 'lila',
  };
  render(<Button {...props} />);
  const ButtonElement = screen.getByRole('button', { name: /My button/i });
  expect(ButtonElement).toBeInTheDocument();
});

it('should NOT render the label when it is not passed as prop', () => {
  const props = {
    variant: 'lila',
  };
  render(<Button {...props} />);
  const ButtonElement = screen.queryByRole('button', { name: /My button/i });
  expect(ButtonElement).not.toBeInTheDocument();
});
