import React, { useId } from 'react';
import PropTypes from 'prop-types';
import styles from './slider.module.scss';

const VARIANTS = {
  default: 'default',
  error: 'error',
};

const Slider = ({
  label, value, handleChange, variant, Icon, customClass, ...props
}) => {
  const sliderVariant = VARIANTS[variant] || VARIANTS.default;
  const inputId = useId();

  return (
    <div className={`${styles['slider-component']} ${styles[sliderVariant]} ${customClass}`} data-testid="sliderComponent">
      {label && <label className={styles.label} htmlFor={inputId}>{`${label}: ${value}`}</label>}

      <div className={styles['input-container']}>
        {Icon && (
          <Icon className={styles.icon} />
        )}
        <input
          id={inputId}
          className={styles.input}
          type="range"
          value={value}
          onChange={(e) => handleChange(e.target.value)}
          min="0"
          max="100"
          step="1"
          {...props}
        />
      </div>
    </div>
  );
};

Slider.propTypes = {
  label: PropTypes.string,
  value: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  handleChange: PropTypes.func,
  variant: PropTypes.string,
  Icon: PropTypes.oneOfType([PropTypes.any]),
  customClass: PropTypes.string,
};

Slider.defaultProps = {
  label: '',
  value: '',
  handleChange: () => {},
  variant: 'default',
  Icon: () => null,
  customClass: '',
};

export default Slider;
