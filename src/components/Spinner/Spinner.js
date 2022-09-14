import React from 'react';
import PropTypes from 'prop-types';
import { ReactComponent as Spin } from '../../assets/spinner.svg';
import './spinner.scss';

const BG_MODIFIERS = {
  light: '--light-background',
  medium: '--medium-background',
  dark: '--dark-background',
  navy: '--navy-background',
};

const SIZE = {
  large: 'spinner__spinner--large',
  medium: 'spinner__spinner--medium',
  small: 'spinner__spinner--small',
};

const Spinner = ({
  theme, size, title, subtitle, customClass,
}) => {
  const bgClass = BG_MODIFIERS[theme];
  const sizeClass = SIZE[size];

  return (
    <div className={`spinner ${customClass}`}>
      <div className={`spinner__container spinner__container${bgClass}`}>
        {
          (bgClass === '--light-background' || bgClass === '--medium-background')
            ? <Spin className={`spinner__spinner spinner__spinner${bgClass} ${sizeClass}`} />
            : <div className={`spinner__spinner spinner__spinner${bgClass} ${sizeClass}`} />
        }
        {title && <div className={`spinner__title spinner__title${bgClass}`}>{title}</div>}
        {subtitle && <div className={`spinner__subtitle spinner__subtitle${bgClass}`}>{subtitle}</div>}
      </div>
      <div className={`spinner__overlay spinner__overlay${bgClass}`} />
    </div>
  );
};

Spinner.propTypes = {
  theme: PropTypes.oneOf(['light', 'medium', 'dark', 'navy']),
  size: PropTypes.oneOf(['large', 'medium', 'small']),
  title: PropTypes.string,
  subtitle: PropTypes.oneOfType([PropTypes.string, PropTypes.element, PropTypes.node]),
  customClass: PropTypes.string,
};

Spinner.defaultProps = {
  theme: 'light',
  title: '',
  subtitle: '',
  size: 'medium',
  customClass: '',
};

export default Spinner;
