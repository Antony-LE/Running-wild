/* eslint-disable no-unused-vars */
/* eslint-disable react/jsx-no-useless-fragment */
import React, { useState } from 'react';
import './challenges.css';
import { NavLink } from 'react-router-dom';
import Navbar from '../navbar/Navbar';
import Footer from '../footer/Footer';
import ChallengesCardList from '../containers/challengesCardList/ChallengesCardList';

// Import of axios
import axios from '../../api/axios';

const LOGOUT_URL = '/user/logout';

function Challenges() {
  // handle wether the user is logged in or not
  const [logout, setLogout] = useState(false);
  // handle wether the user has succefully logged in or not
  const [isLogged, setIsLogged] = useState(false);
  // Handle the form submission
  const handleLogoutClick = async (e) => {
    const response = await axios.get(LOGOUT_URL);
    setLogout(true);
    setIsLogged(response.data.result);
  };

  // logged in variable
  const isLoggedIn = localStorage.getItem('id');
  return (
    <>
      {isLoggedIn ? (
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
            <div className="runningwild__challenges-container">
              <header className="runningwild__challenges-header">
                <Navbar />
                <button className="runningwild__logout-button" type="button" onClick={handleLogoutClick}>Se déconnecter</button>
                <NavLink to="/profile">
                  <button className="runningwild__profile-button" type="button">Mon profil</button>
                </NavLink>
              </header>
              <main className="runningwild__challenges-main">
                <ChallengesCardList />
              </main>
              <Footer />
            </div>
          )}
        </>
      ) : (<div className="forbidden"> Veuillez d&apos;abord vous connecter à votre compte !</div>)}
    </>

  );
}
export default Challenges;
