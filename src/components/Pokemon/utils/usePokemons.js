/* eslint-disable */
import {
  useState, useEffect, useCallback,
} from 'react';
import { useQuery } from '@tanstack/react-query';
import axios from 'axios';
import { POKEMONS_API_URL, ACTIONS } from './constants';

const api = axios.create({
  baseURL: POKEMONS_API_URL,
});

const NULL_POKEMONS = [];

const getPokemons = () => (api.get('/', { params: { idAuthor } }));

const usePokemons = (idAuthor) => {
  const { data, error, isLoading } = useQuery(['pokemons'], getPokemons);
  console.log('isLoading: ', isLoading);
  console.log('error: ', error);
  console.log('data: ', data);

  const [pokemons, setPokemons] = useState(NULL_POKEMONS);
  const [message, setMessage] = useState('');

  const refreshPokemons = useCallback(async () => {
    try {
      const { data } = await api.get('/', { params: { idAuthor } });

      if (!data) throw new Error('Pokemons not found');

      setPokemons(data);
    } catch (error) {
      setMessage(error.message);
      setPokemons(NULL_POKEMONS);
    }
  }, [idAuthor]);

  const saveNewPokemon = useCallback(async (newPokemon) => {
    try {
      const { data: { id } } = await api.post('/', newPokemon);

      if (!id) throw new Error('Could not save Pokemon: id not found');

      refreshPokemons();
      setMessage('Pokemon Saved!!!');
    } catch (error) {
      setMessage(error.message);
    }
  }, [refreshPokemons]);

  const editPokemon = useCallback(async (pokemon) => {
    try {
      if (!pokemon.id) throw new Error('Could not update: id not found');

      const { data: { id } } = await api.put(`/${pokemon.id}`, pokemon);

      if (!id) throw new Error('Could not Update: id not found');

      refreshPokemons();
      setMessage('Pokemon Updated!!!');
    } catch (error) {
      setMessage(error.message);
    }
  }, [refreshPokemons]);

  const deletePokemon = useCallback(async (id) => {
    try {
      const { data: { success } } = await api.delete(`/${id}`);

      if (!success) throw new Error('Could not delete: Pokemon not found.');

      refreshPokemons();
      setMessage('Pokemon Deleted!!!');
    } catch (error) {
      setMessage(error.message);
    }
  }, [refreshPokemons]);

  useEffect(() => { refreshPokemons(); }, [refreshPokemons]);

  useEffect(() => {
    const timer = setTimeout(() => {
      setMessage('');
    }, 2000);
    return () => clearTimeout(timer);
  }, [message]);

  const executeAction = (actionType, payload) => {
    switch (actionType) {
      case ACTIONS.GET: refreshPokemons(); break;
      case ACTIONS.NEW: saveNewPokemon(payload); break;
      case ACTIONS.EDIT: editPokemon(payload); break;
      case ACTIONS.DELETE: deletePokemon(payload); break;
      default: break;
    }
  };

  return [pokemons, executeAction, message];
};

export default usePokemons;
