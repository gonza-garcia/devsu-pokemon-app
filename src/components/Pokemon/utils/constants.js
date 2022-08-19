const POKEMONS_API_URL = 'https://bp-pokemons.herokuapp.com';

const MODES = {
  show: 'show',
  new: 'new',
  edit: 'edit',
  delete: 'delete',
};

const ACTIONS = {
  GET: 'get',
  NEW: 'new',
  EDIT: 'edit',
  DELETE: 'delete',
};

const NULL_POKEMON = {
  id: '',
  name: '',
  image: '',
  attack: 0,
  defense: 0,
  hp: 0,
  type: 'water',
  id_author: 1,
};

export {
  POKEMONS_API_URL,
  MODES,
  ACTIONS,
  NULL_POKEMON,
};
