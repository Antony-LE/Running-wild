/* eslint-disable no-unused-vars */
/* eslint-disable react/jsx-no-useless-fragment */
import React, { useState } from 'react';
import './classements.css';
import { NavLink } from 'react-router-dom';
import Navbar from '../navbar/Navbar';
import Footer from '../footer/Footer';
import ClassementItems from '../containers/classementItems/ClassementItems';
import classementData from '../../data/classementData';

// Import of axios
import axios from '../../api/axios';

const LOGOUT_URL = '/user/logout';

function Classement() {
  // handle wether the user is logged in or not
  const [logout, setLogout] = useState(false);
  // handle wether the user has succefully logged in or not
  const [isLogged, setIsLogged] = useState(false);
  // Handle the form submission
  const handleLogoutClick = async (e) => {
    const response = await axios.get(LOGOUT_URL);
    setLogout(true);
    setIsLogged(response.data.result);
    console.log(response);
  };
  return (
    <>
      {logout ? (
        <section className="runningwild__logout-success gradient__bg">
          <h1>
            Vous êtes déconnecté !
          </h1>
          <p>
            <NavLink to="/">
              Me connecter
            </NavLink>
          </p>
        </section>
      ) : (
        <div className="runningwild__classements-container">
          <header className="runningwild__classements-header">
            <Navbar />
            <button className="runningwild__logout-button" type="button" onClick={handleLogoutClick}>Se déconnecter</button>
            <NavLink to="/profile">
              <button className="runningwild__profile-button" type="button">Mon profil</button>
            </NavLink>
          </header>
          <main className="runningwild__classements-main">
            <section className="runningwild__classements-main-section_classement">
              <ClassementItems classementData={classementData} />
            </section>
            <div className="runningwild__classements-main-section_infos">
              <section className="runningwild__classements-main-section_user">Ici les infos joueur</section>
              <section className="runningwild__classements-main-section_comparatif">Ici le comparatif</section>
            </div>
          </main>
          <Footer />
        </div>
      )}
    </>
  );
}
export default Classement;
