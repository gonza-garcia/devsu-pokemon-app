import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import Button from '../../Button/Button';
import styles from './pokemonTable.module.scss';
import { ReactComponent as EditIcon } from '../../../assets/edit.svg';
import { ReactComponent as DeleteIcon } from '../../../assets/delete.svg';

const PokemonTable = ({
  pokemons, searchKey, handleEditClick, handleDeleteClick,
}) => {
  const filteredPokemons = (searchKey !== '')
    ? pokemons.filter((pok) => pok?.name?.includes?.(searchKey))
    : pokemons;

  useEffect(() => {

  }, [searchKey]);

  return (
    <section className={styles['pokemon-table']}>
      {
        !!filteredPokemons.length && (
          <table
            className={styles.table}
            border="1"
            cellSpacing="0"
          >
            <thead>
              <tr>
                <th>Nombre</th>
                <th>Imagen</th>
                <th>Ataque</th>
                <th>Defensa</th>
                <th>Acciones</th>
              </tr>
            </thead>
            <tbody>
              {filteredPokemons.map((poke) => {
                const {
                  id, name, image, attack, defense,
                } = poke;

                return (
                  <tr key={id}>
                    <td>{name}</td>
                    <td>
                      <img className={styles.image} src={image} alt="" />
                    </td>
                    <td>{attack}</td>
                    <td>{defense}</td>
                    <td>
                      <div className={styles.acciones}>
                        <Button
                          Icon={EditIcon}
                          handleClick={() => handleEditClick(id)}
                          variant="icon"
                        />
                        <Button
                          Icon={DeleteIcon}
                          handleClick={() => handleDeleteClick(id)}
                          variant="icon"
                        />
                      </div>
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        )
      }
    </section>
  );
};

PokemonTable.propTypes = {
  pokemons: PropTypes.arrayOf(PropTypes.shape({})),
  searchKey: PropTypes.string,
  handleEditClick: PropTypes.func,
  handleDeleteClick: PropTypes.func,
};

PokemonTable.defaultProps = {
  pokemons: [],
  searchKey: '',
  handleEditClick: () => {},
  handleDeleteClick: () => {},
};

export default PokemonTable;
