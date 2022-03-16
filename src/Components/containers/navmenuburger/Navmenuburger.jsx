import React, { useState } from 'react';
import { RiMenu3Line, RiCloseLine } from 'react-icons/ri';
import './navmenuburger.css';
import Navmenu from '../navmenu/Navmenu';
import navData from '../../../data/navdata';

function Navmenuburger() {
  // the first variable will show us if are we currently showing the mobile menu
  // the second is going to be a function that will let us change that variable
  const [toggleMenu, setToggleMenu] = useState(false);
  return (
    <div className="portfolio__navbar-menu">
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
      <Navmenu navData={navData} />
      )}
    </div>
  );
}

export default Navmenuburger;
