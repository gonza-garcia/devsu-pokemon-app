import React from 'react';
import PropTypes from 'prop-types';
import styles from './header.module.scss';

const Header = ({ title, subtitle }) => (
  <header className={styles.header}>
    <span className={styles.title}>
      {title}
    </span>
    <span className={styles.subtitle}>
      {subtitle}
    </span>
  </header>
);

Header.propTypes = {
  title: PropTypes.string,
  subtitle: PropTypes.string,
};

Header.defaultProps = {
  title: '',
  subtitle: '',
};

export default Header;
