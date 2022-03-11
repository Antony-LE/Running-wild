/* eslint-disable no-unused-vars */
/* eslint-disable react/jsx-no-useless-fragment */
import React, { useState } from 'react';
import './homepage.css';
import { NavLink } from 'react-router-dom';
import HomepageCardList from '../containers/homepageCardList/HomepageCardList';
import cardData from '../../data/cardData';
import Navbar from '../navbar/Navbar';
import Footer from '../footer/Footer';

// Import of axios
import axios from '../../api/axios';

// Endpoint for logging out
const LOGOUT_URL = '/user/logout';

// logged in variable
const isLoggedIn = localStorage.getItem('user_id');

function Homepage() {
  // handle wether the user is logged in or not
  const [logout, setLogout] = useState(false);
  // handle wether the user has succefully logged in or not
  const [isLogged, setIsLogged] = useState(false);
  // Handle the form submission
  const handleLogoutClick = async (e) => {
    const response = await axios.get(LOGOUT_URL);
    setLogout(true);
    setIsLogged(response.data.result);
    // Clear out all the user's data when disconnect
    window.localStorage.clear();
  };
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
            <div className="runningwild__homepage-container">
              <header className="runningwild__homepage-header">
                <Navbar />
                <button className="runningwild__logout-button" type="button" onClick={handleLogoutClick}>Se déconnecter</button>
                <NavLink to="/profile">
                  <button className="runningwild__profile-button" type="button">Mon profil</button>
                </NavLink>
              </header>
              <main className="runningwild__homepage-main">
                <HomepageCardList cardData={cardData} />
              </main>
              <Footer />
            </div>
          )}
        </>
      ) : (
        <div className="forbidden"> Veuillez d&apos;abord vous connecter à votre compte !</div>
      )}

    </>
  );
}
export default Homepage;
