import React, { useState, useCallback } from 'react';
import Input from '../../Input/Input';
import Button from '../../Button/Button';
import PokemonTable from '../PokemonTable/PokemonTable';
import PokemonShowAndEdit from '../PokemonShowAndEdit/PokemonShowAndEdit';
import usePokemons from '../utils/usePokemons';
import { MODES, ACTIONS, NULL_POKEMON } from '../utils/constants';
import { ReactComponent as SearchIcon } from '../../../assets/search.svg';
import { ReactComponent as PlusIcon } from '../../../assets/plus.svg';
import styles from './pokemonController.module.scss';

const PokemonController = () => {
  const [idAuthor, setIdAuthor] = useState(1);
  const [pokemons, executeAction, message] = usePokemons(idAuthor);
  const [selectedPokemonId, setSelectedPokemonId] = useState('');
  const [selectedMode, setSelectedMode] = useState(MODES.none);
  const [inputValue, setInputValue] = useState('');

  const getPokemonById = useCallback((id) => {
    const pok = pokemons.find((p) => p?.id === id);
    return pok || NULL_POKEMON;
  }, [pokemons]);

  const selectedPokemon = getPokemonById(selectedPokemonId);

  const handleDelete = (id) => {
    executeAction(ACTIONS.DELETE, id);
    setSelectedPokemonId('');
    setSelectedMode(MODES.none);
  };

  const handleEditButtonClick = (id) => {
    setSelectedPokemonId(id);
    setSelectedMode(MODES.edit);
  };

  const handleNewButtonClicked = () => {
    setSelectedPokemonId('');
    setSelectedMode(MODES.new);
  };

  const handleSaveButtonClicked = (formValues) => {
    const newPokemon = {
      ...selectedPokemon,
      ...formValues,
      attack: parseInt(formValues.attack, 10) || 0,
      defense: parseInt(formValues.defense, 10) || 0,
      idAuthor: formValues.id_author || idAuthor,
    };

    if (selectedMode === MODES.new) {
      executeAction(ACTIONS.NEW, { ...NULL_POKEMON, ...newPokemon });
    } else if (selectedMode === MODES.edit) {
      executeAction(ACTIONS.EDIT, { ...selectedPokemon, ...newPokemon });
    }

    setSelectedPokemonId('');
    setSelectedMode(MODES.none);
  };

  const handleCancelButtonClicked = () => {
    setSelectedPokemonId('');
    setSelectedMode(MODES.none);
  };

  return (
    <section className={styles['pokemon-controller']}>
      {message && <div className={styles.message}>{message}</div>}
      <div className={styles['search-container']}>
        <Input
          value={inputValue}
          handleChange={setInputValue}
          Icon={SearchIcon}
          variant="lila"
          placeholder="Buscar"
        />
        <Input
          label="Author ID"
          value={parseInt(idAuthor, 10) || 0}
          handleChange={(value) => setIdAuthor(parseInt(value, 10))}
          variant="narrow"
        />
        <Button
          label="Nuevo"
          Icon={PlusIcon}
          handleClick={handleNewButtonClicked}
          variant="lila"
        />
      </div>
      <div className={styles['pokemon-table']}>
        <PokemonTable
          pokemons={pokemons}
          searchKey={inputValue}
          handleEditClick={handleEditButtonClick}
          handleDeleteClick={handleDelete}
        />
      </div>
      {(!!selectedPokemonId || (selectedMode !== MODES.none)) && (
        <div className={styles['pokemon-controller']}>
          <PokemonShowAndEdit
            pokemon={selectedPokemon}
            mode={selectedMode}
            setMode={setSelectedMode}
            handleSaveClick={handleSaveButtonClicked}
            handleCancelClick={handleCancelButtonClicked}
          />
        </div>
      )}
    </section>
  );
};

export default PokemonController;
