import React from 'react';
import { render, screen } from '@testing-library/react';
import PokemonShowAndEdit from '../PokemonShowAndEdit';

test('PokemonShowAndEdit renders with same title passed as prop', () => {
  const title = 'my title';
  render(<PokemonShowAndEdit title={title} />);
  const PokemonShowAndEditElement = screen.getByText(/my title/i);
  expect(PokemonShowAndEditElement).toBeInTheDocument();
});
