import React from 'react';
import { NavLink } from 'react-router-dom';
import PropTypes from 'prop-types';
import './navbar.css';
import logo from '../../Assets/wildwhite.png';
import Navmenuburger from '../containers/navmenuburger/Navmenuburger';

function Navbar({ className }) {
  const [width, setWidth] = React.useState(window.innerWidth);
  const breakPoint = 700;
  React.useEffect(() => {
    /* I added an event listener inside of a "useEffect" hook that updates
       the "width" state variable when the window size changes */
    window.addEventListener('resize', () => setWidth(window.innerWidth));
    /* An empty array passed as the dependencies of the effect will cause this
       effect to only run when the component mounts, and not each time it updates.
    */
  }, []);
  return (
    <div className="runningwild__navbar-container">
      <img className="runningWildLogo" src={logo} alt="logo de running wild" />
      <div className="runningwild__navbar-linksContainer">
        {width > breakPoint ? (
          <>
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
            <NavLink
              className={({ isActive }) => (isActive ? `${className}-active` : className)}
              to="/profile"
            >
              Profil
            </NavLink>
          </>
        ) : (<Navmenuburger />)}
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
