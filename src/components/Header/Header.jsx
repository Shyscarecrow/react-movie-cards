import React from 'react';
import PropTypes from 'prop-types';
import styles from './Header.module.scss';

export const Header = ({ title }) => (
  <nav className={[styles.header, 'navbar', 'navbar-dark', 'bg-dark'].join(' ')}>
    <div className="container">
      <div className="row m-auto">
        <i className="fa fa-film fa-2x text-white my-auto" />
        <div className="h3 ml-3 my-auto text-light" href="/">{title}</div>
      </div>
    </div>
  </nav>
);

Header.defaultProps = {
  title: 'Title',
};

Header.propTypes = {
  title: PropTypes.string,
};
