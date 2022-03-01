/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react';
import './footer.css';

function Footer() {
  return (
    <div className="runningwild__footer">
      <span>
        ©
        {' '}
        {new Date().getFullYear()}
        {' '}
        Running Wild
      </span>
      <br />
      <a href="#">CGU</a>
      <br />
      <a href="#">FAQ</a>
    </div>
  );
}

export default Footer;
