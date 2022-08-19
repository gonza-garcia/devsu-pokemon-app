import React, { useId } from 'react';
import PropTypes from 'prop-types';
import styles from './input.module.scss';

const VARIANTS = {
  default: 'default',
  error: 'error',
  narrow: 'narrow',
};

const Input = ({
  label, value, handleChange, variant, Icon, customClass, ...props
}) => {
  const inputVariant = VARIANTS[variant] || VARIANTS.default;
  const inputId = useId();

  return (
    <div className={`${styles['input-component']} ${styles[inputVariant]} ${customClass}`} data-testid="inputComponent">
      {label && <label className={styles.label} htmlFor={inputId}>{`${label}:`}</label>}

      <div className={styles['input-container']}>
        {Icon && (
          <Icon className={styles.icon} />
        )}
        <input
          id={inputId}
          className={styles.input}
          type="text"
          value={value}
          onChange={(e) => handleChange(e.target.value)}
          {...props}
        />
      </div>
    </div>
  );
};

Input.propTypes = {
  label: PropTypes.string,
  value: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  handleChange: PropTypes.func,
  variant: PropTypes.string,
  Icon: PropTypes.oneOfType([PropTypes.any]),
  customClass: PropTypes.string,
};

Input.defaultProps = {
  label: '',
  value: '',
  handleChange: () => {},
  variant: 'default',
  Icon: () => null,
  customClass: '',
};

export default Input;
