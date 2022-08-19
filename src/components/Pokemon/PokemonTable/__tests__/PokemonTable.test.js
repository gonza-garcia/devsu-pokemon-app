import React from 'react';
import { render, screen } from '@testing-library/react';
import PokemonTable from '../PokemonTable';

import { MODES } from '../../utils/constants';

const pokemons = [
  {
    id: 11,
    name: 'pikachu',
    image: 'pikachu',
    attack: 44,
    defense: 15,
  },
  {
    id: 12,
    name: 'achicoria',
    image: 'achi',
    attack: 32,
    defense: 27,
  },
];

describe('For PokemonTable Only', () => {
  it('should be in the document', () => {
    const props = {
      pokemons,
      searchKey: '',
    };
    render(<PokemonTable {...props} />);
    const pokemonTableElement = screen.getByTestId('pokemon-table');
    expect(pokemonTableElement).toBeInTheDocument();
  });
});
