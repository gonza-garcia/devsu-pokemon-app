import React from 'react';
import PropTypes from 'prop-types';
import styles from './button.module.scss';

const VARIANTS = {
  default: 'default',
  lila: 'lila',
  icon: 'icon-solo',
};

const Button = ({
  label, Icon, handleClick, variant, ...props
}) => {
  const buttonVariant = VARIANTS[variant] || VARIANTS.default;

  return (
    <button
      className={`${styles.button} ${styles[buttonVariant]}`}
      type="button"
      onClick={handleClick}
      {...props}
    >
      {Icon && <Icon className={styles.icon} />}
      {!!label && <span className={styles.label}>{label}</span>}
    </button>
  );
};

Button.propTypes = {
  handleClick: PropTypes.func,
  label: PropTypes.string,
  variant: PropTypes.string,
  Icon: PropTypes.oneOfType([PropTypes.any]),
};

Button.defaultProps = {
  handleClick: () => {},
  label: '',
  variant: 'default',
  Icon: () => <span>No Icon</span>,
};

export default Button;
