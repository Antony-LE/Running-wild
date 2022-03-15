import React from 'react';
import './navmenu.css';
import { NavLink } from 'react-router-dom';
import PropTypes from 'prop-types';

function Navmenu({ navData, linkClass }) {
  return (
    <>
      {navData.map(({ link, text }) => (
        <NavLink
          className={linkClass}
          to={link}
        >
          {text}
        </NavLink>
      ))}
    </>
  );
}

Navmenu.propTypes = {
  linkClass: PropTypes.string,
  navData: PropTypes.arrayOf(
    PropTypes.shape({
      link: PropTypes.string.isRequired,
      text: PropTypes.string.isRequired,
    }).isRequired,
  ).isRequired,
};

Navmenu.defaultProps = {
  linkClass: 'runningwild__navmenu-links',
};

export default Navmenu;
