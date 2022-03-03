import React from 'react';
import { NavLink } from 'react-router-dom';
import PropTypes from 'prop-types';
import './navbar.css';
import logo from '../../Assets/wildwhite.png';

function Navbar({ className }) {
  return (
    <div className="runningwild__navbar-container">
      <img src={logo} alt="logo de running wild" />
      <NavLink className={({ isActive }) => (isActive ? `${className}-active` : className)} to="/homepage">
        Accueil
      </NavLink>
      <NavLink
        className={({ isActive }) => (isActive ? `${className}-active` : className)}
        to="/parcours"
      >
        Parcours
      </NavLink>
      <NavLink
        className={({ isActive }) => (isActive ? `${className}-active` : className)}
        to="/challenges"
      >
        Challenges
      </NavLink>
      <NavLink
        className={({ isActive }) => (isActive ? `${className}-active` : className)}
        to="/classements"
      >
        Classements
      </NavLink>
    </div>
  );
}

Navbar.propTypes = {
  className: PropTypes.string,
};

Navbar.defaultProps = {
  className: 'runningwild__navbar-link',
};

export default React.memo(Navbar);
