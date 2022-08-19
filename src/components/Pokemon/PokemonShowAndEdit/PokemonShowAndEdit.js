import React, { useState, useEffect, useCallback } from 'react';
import PropTypes from 'prop-types';
import Input from '../../Input/Input';
import Slider from '../../Slider/Slider';
import Button from '../../Button/Button';
import { MODES } from '../utils/constants';
import { ReactComponent as SaveIcon } from '../../../assets/save.svg';
import { ReactComponent as CloseIcon } from '../../../assets/close.svg';
import styles from './pokemonShowAndEdit.module.scss';

const PokemonShowAndEdit = ({
  pokemon, mode, handleSaveClick, handleCancelClick,
}) => {
  const [formValues, setFormValues] = useState({
    id: pokemon?.id || '',
    name: pokemon?.name || '',
    image: pokemon?.image || '',
    attack: pokemon?.attack || 0,
    defense: pokemon?.defense || 0,
  });

  const sectionTitle = (mode === MODES.new || mode === MODES.show) ? 'Nuevo Pokemon' : 'Editar Pokemon';

  const [errorState, setErrorState] = useState(false);

  const updateFormValues = useCallback(() => {
    if (mode === MODES.new || mode === MODES.none) {
      setFormValues({
        id: '',
        name: '',
        image: '',
        attack: 0,
        defense: 0,
      });
    }
    if (mode === MODES.edit) {
      setFormValues({ ...formValues, ...pokemon });
    }
  }, [pokemon, mode]);

  useEffect(() => {
    updateFormValues();
  }, [updateFormValues]);

  useEffect(() => {
    const errorCondition = Boolean(!formValues.name || !formValues.image);
    setErrorState(errorCondition);
  }, [formValues.name, formValues.image]);

  const handleSaveButton = () => {
    if (!errorState) handleSaveClick(formValues);
  };

  return (
    <section className={styles['pokemon-show-and-edit']}>
      <h2 className={styles.title}>{sectionTitle}</h2>
      <form className={styles['form-container']}>
        <img className={styles.image} src={formValues.image} alt="pokemon figure" />
        <Input
          customClass={styles['input-name']}
          label="Nombre"
          value={formValues.name}
          handleChange={(value) => setFormValues((f) => ({ ...f, name: value }))}
          variant={errorState ? 'error' : ''}
        />
        <Input
          customClass={styles['input-image']}
          label="Imagen"
          value={formValues.image}
          handleChange={(value) => setFormValues((f) => ({ ...f, image: value }))}
          variant={errorState ? 'error' : ''}
        />
        <Slider
          customClass={styles['input-attack']}
          label="Ataque"
          value={formValues.attack}
          handleChange={(value) => setFormValues((f) => ({ ...f, attack: value }))}
        />
        <Slider
          customClass={styles['input-defense']}
          label="Defensa"
          value={formValues.defense}
          handleChange={(value) => setFormValues((f) => ({ ...f, defense: value }))}
        />
        <div className={styles['controls-container']}>
          <Button
            label="Guardar"
            Icon={SaveIcon}
            handleClick={handleSaveButton}
            variant="lila"
            disabled={errorState}
          />
          <Button
            label="Cancelar"
            Icon={CloseIcon}
            handleClick={handleCancelClick}
            variant="lila"
          />
        </div>
      </form>
    </section>
  );
};

PokemonShowAndEdit.propTypes = {
  pokemon: PropTypes.shape({
    id: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
    name: PropTypes.string,
    image: PropTypes.string,
    attack: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
    defense: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  }),
  mode: PropTypes.oneOf(Object.keys(MODES)),
  handleSaveClick: PropTypes.func,
  handleCancelClick: PropTypes.func,
};

PokemonShowAndEdit.defaultProps = {
  pokemon: null,
  mode: MODES.show,
  handleSaveClick: () => {},
  handleCancelClick: () => {},
};

export default PokemonShowAndEdit;
