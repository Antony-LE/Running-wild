import React from 'react';
import PropTypes from 'prop-types';
import './notFound.css';
import { NavLink } from 'react-router-dom';

function NotFound({
  className,

}) {
  return (
    <div className={className}>
      <h1 className="text-shadow-pop-right">Erreur 404</h1>
      <NavLink to="/">
        <p>Se rediriger</p>
      </NavLink>
    </div>
  );
}

NotFound.propTypes = {
  className: PropTypes.string,
};

NotFound.defaultProps = {
  className: 'runningwild__notFound',
};

export default NotFound;
