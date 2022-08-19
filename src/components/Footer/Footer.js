import React from 'react';
import PropTypes from 'prop-types';
import styles from './footer.module.scss';

const Footer = ({ title }) => (
  <footer className={styles.footer}>
    {title}
  </footer>
);

Footer.propTypes = {
  title: PropTypes.string,
};

Footer.defaultProps = {
  title: 'No Title',
};

export default Footer;
