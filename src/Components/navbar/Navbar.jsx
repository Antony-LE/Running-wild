import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import PropTypes from 'prop-types';
import './navbar.css';
import { RiMenu3Line, RiCloseLine } from 'react-icons/ri';
import logo from '../../Assets/wildwhite.png';
import Navmenu from '../containers/navmenu/Navmenu';
import navData from '../../data/navdata';

function Navbar({ className }) {
  // the first variable will show us if are we currently showing the mobile menu
  // the second is going to be a function that will let us change that variable
  const [toggleMenu, setToggleMenu] = useState(false);
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
      <div className="runningwild__navbar-menu puff-in-center2">
        {toggleMenu ? (
          <RiCloseLine
            color="#fff"
            size={27}
            onClick={() => setToggleMenu(false)}
          />
        ) : (
          <RiMenu3Line
            color="#fff"
            size={27}
            onClick={() => setToggleMenu(true)}
          />
        )}
        {toggleMenu && (
          <div className="runningwild__navbar-menu_container">
            <Navmenu navData={navData} />
          </div>
        )}
      </div>
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
