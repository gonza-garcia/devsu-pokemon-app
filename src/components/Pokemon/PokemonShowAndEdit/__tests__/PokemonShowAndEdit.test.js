import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import PokemonShowAndEdit from '../PokemonShowAndEdit';
import { MODES } from '../../utils/constants';

const pokemon = {
  id: 11,
  name: 'pikachu',
  image: 'pikachu',
  attack: 44,
  defense: 15,
};

describe('For PokemonShowAndEdit Only', () => {
  it('should be in the document', () => {
    const props = {
      pokemon,
      mode: MODES.edit,
    };
    render(<PokemonShowAndEdit {...props} />);
    const pokemonShowElement = screen.getByTestId('pokemon-show');
    expect(pokemonShowElement).toBeInTheDocument();

    const nameInput = screen.getByLabelText('Nombre:');
    const imageInput = screen.getByLabelText('Imagen:');
    const attackInput = screen.getByLabelText('Ataque: 44');
    const defenseInput = screen.getByLabelText('Defensa: 15');

    expect(nameInput).toBeInTheDocument();
    expect(imageInput).toBeInTheDocument();
    expect(attackInput).toBeInTheDocument();
    expect(defenseInput).toBeInTheDocument();
  });

  it('inputs should be present and have the pokemon prop values', () => {
    const props = {
      pokemon,
      mode: MODES.edit,
    };
    render(<PokemonShowAndEdit {...props} />);

    const nameInput = screen.getByLabelText('Nombre:');
    const imageInput = screen.getByLabelText('Imagen:');
    const attackInput = screen.getByLabelText('Ataque: 44');
    const defenseInput = screen.getByLabelText('Defensa: 15');

    expect(nameInput).toBeInTheDocument();
    expect(imageInput).toBeInTheDocument();
    expect(attackInput).toBeInTheDocument();
    expect(defenseInput).toBeInTheDocument();

    expect(nameInput.value).toBe(props.pokemon.name);
    expect(imageInput.value).toBe(props.pokemon.image);
    expect(attackInput.value).toBe(props.pokemon.attack.toString());
    expect(defenseInput.value).toBe(props.pokemon.defense.toString());
  });

  it('when changing the inputs value, they should change their value', () => {
    const props = {
      pokemon,
      mode: MODES.edit,
    };
    render(<PokemonShowAndEdit {...props} />);

    const nameInput = screen.getByLabelText('Nombre:');
    const imageInput = screen.getByLabelText('Imagen:');
    const attackInput = screen.getByLabelText('Ataque: 44');
    const defenseInput = screen.getByLabelText('Defensa: 15');

    // After fire the change event, they should change their values
    fireEvent.change(nameInput, { target: { value: 'chicorita' } });
    fireEvent.change(imageInput, { target: { value: 'chicorita' } });
    fireEvent.change(attackInput, { target: { value: '10' } });
    fireEvent.change(defenseInput, { target: { value: '11' } });

    expect(nameInput.value).toBe('chicorita');
    expect(imageInput.value).toBe('chicorita');
    expect(attackInput.value).toBe('10');
    expect(defenseInput.value).toBe('11');
  });
});
