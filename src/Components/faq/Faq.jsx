/* eslint-disable max-len */
/* eslint-disable no-unused-vars */
/* eslint-disable react/jsx-no-useless-fragment */
import React, { useState } from 'react';
import './faq.css';
import { NavLink } from 'react-router-dom';
import Navbar from '../navbar/Navbar';
import Footer from '../footer/Footer';

// Import of axios
import axios from '../../api/axios';

// Endpoint for logging out
const LOGOUT_URL = '/user/logout';

// logged in variable
const isLoggedIn = localStorage.getItem('id');

function Faq() {
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
            <div className="runningwild__faq-container">
              <header className="runningwild__faq-header">
                <Navbar />
                <button className="runningwild__logout-button" type="button" onClick={handleLogoutClick}>Se déconnecter</button>
                <NavLink to="/profile">
                  <button className="runningwild__profile-button" type="button">Mon profil</button>
                </NavLink>
              </header>
              <main className="runningwild__faq-main">
                <div className="runningwild__faq-main-text">
                  <h2>Comment puis-gagner des points ?</h2>
                  <p>Vous pouvez gagner des points en vous inscrivant à des parcours et en accomplissant des challenges</p>
                  <br />
                  <h2>Quel est le barème de point ?</h2>
                  <p>Des parcours classiques 1km parcourus = 1point. Les challenges peuvent vous rapporter des points bonus en plus de ceux engrangés par les km parcourus</p>
                  <br />
                  <h2>Quels sont les différents rank (grades) et comment les atteindre ?</h2>
                  <p>Pour monter en rank, rien de plus simple, il faut gagner des points ! Voici la liste :</p>
                  <ul>
                    <li>- Newbie -</li>
                    <li>- Starter -</li>
                    <li>- Tortoise -</li>
                    <li>- Experienced -</li>
                    <li>- Regular -</li>
                    <li>- Fitness freak -</li>
                    <li>- Fanatic -</li>
                    <li>- Hardcore -</li>
                    <li>- Hare -</li>
                    <li>- Expert -</li>
                    <li>- Ironman -</li>
                    <li>- Ironman 2 -</li>
                  </ul>
                </div>
              </main>
              <Footer />
            </div>
          )}
        </>
      ) : (
        <div className="forbidden">
          <div className="forbidden-text">
            <h2>Veuillez d&apos;abord vous connecter à votre compte !</h2>
            <p>
              <NavLink to="/">
                Me connecter
              </NavLink>
            </p>
          </div>
        </div>
      )}

    </>
  );
}
export default Faq;
