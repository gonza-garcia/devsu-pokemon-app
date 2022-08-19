import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import PokemonController from '../PokemonController';

describe('For Pokemon Controller Only', () => {
  it('should be in the document', () => {
    render(<PokemonController />);
    const pokemonControllerComponent = screen.queryByTestId('pokemon-controller');
    expect(pokemonControllerComponent).toBeInTheDocument();
  });
});

describe('Pokemon Controller And New Button', () => {
  it('should NOT render PokemonShowAndEdit component at first, only when we click the New Button', () => {
    render(<PokemonController />);
    const pokemonShowAndEditComponent = screen.queryByTestId('pokemon-show');
    expect(pokemonShowAndEditComponent).not.toBeInTheDocument();

    const buttonElement = screen.getByRole('button', { name: /Nuevo/i });
    expect(buttonElement).toBeVisible();

    fireEvent.click(buttonElement);
    const pokemonShowAndEditComponent2 = screen.getByTestId('pokemon-show');
    expect(pokemonShowAndEditComponent2).toBeInTheDocument();
  });
});
