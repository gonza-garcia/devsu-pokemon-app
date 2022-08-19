import React from 'react';
import { render, screen } from '@testing-library/react';
import PokemonTable from '../PokemonTable';

test('PokemonTable renders with same title passed as prop', () => {
  const title = 'my title';
  render(<PokemonTable title={title} />);
  const PokemonTableElement = screen.getByText(/my title/i);
  expect(PokemonTableElement).toBeInTheDocument();
});
