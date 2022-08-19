import React from 'react';
import { render, screen } from '@testing-library/react';
import PokemonController from '../PokemonController';

test('PokemonController renders with same title passed as prop', () => {
  const title = 'my title';
  render(<PokemonController title={title} />);
  const PokemonControllerElement = screen.getByText(/my title/i);
  expect(PokemonControllerElement).toBeInTheDocument();
});
