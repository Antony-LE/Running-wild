/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react';
import { NavLink } from 'react-router-dom';
import './footer.css';

function Footer() {
  return (
    <div className="runningwild__footer">
      <span>
        ©
        {' '}
        {new Date().getFullYear()}
        {' '}
        <h2>Running Wild</h2>
      </span>
      <div className="runningwild__footer-links">
        <NavLink className="runningwild__footer-link" to="/CGU">
          CGU
        </NavLink>
        <NavLink className="runningwild__footer-link" to="/FAQ">
          FAQ
        </NavLink>
      </div>
    </div>
  );
}

export default Footer;
