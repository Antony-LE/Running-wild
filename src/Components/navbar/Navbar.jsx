import React from 'react';
import './navbar.css';

function Navbar() {
  return (
    <nav className="runningwild__navbar">
      <ul>
        <li>
          Home
        </li>
        <li>
          Parcours
        </li>
        <li>
          Challenges
        </li>
        <li>
          Classements
        </li>
      </ul>
    </nav>
  );
}

export default Navbar;
