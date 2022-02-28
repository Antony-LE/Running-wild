/* eslint-disable jsx-a11y/media-has-caption */
/* eslint-disable jsx-a11y/anchor-is-valid */
/* eslint-disable react/jsx-no-useless-fragment */

import React, { useState, useEffect } from 'react';
import './login.css';

// Import of npm icons and font from fontawesome.com
import { faInfoCircle } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import runningVideo from '../../Assets/running.webm';

// Regex for the email validation ( exmaple@wanadoo.com format)
const EMAIL_REGEX = /^[\w-.]+@([\w-]+\.)+[\w-]{2,4}$/;
/* Regex for the username validation (at least one character lower,
one character upper, one digit ,one special characters and 8 to 24 characters ) */
const PWD_REGEX = /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%]).{8,24}$/;

function Login() {
  // handle states related to user
  const [userEmail, setUserEmail] = useState('');
  const [validEmail, setValidEmail] = useState(false);
  // handle states related to paswword
  const [pwd, setPwd] = useState('');
  const [validPwd, setValidPwd] = useState(false);
  // handle error
  const [errMsg, setErrMsg] = useState(false);

  // Handle the user's inputs with regex for each input
  useEffect(() => {
    setValidEmail(EMAIL_REGEX.test(userEmail));
    console.log(userEmail);
  }, [userEmail]);
  // Handle both password and confirmed password validation
  useEffect(() => {
    const result = PWD_REGEX.test(pwd);
    console.log(pwd);
    setValidPwd(result);
  }, [pwd]);

  // check if the matchpassword matches the password (boolean)
  useEffect(() => {
    setErrMsg('Something went wrong !');
  }, [
    userEmail,
    pwd,
  ]);

  // Handle the form submission
  const handleSubmit = async (e) => {
    e.preventDefault();
  };

  return (
    <div className="runningwild__login-container">
      <section className="runningwild__login-left">
        <p className={!errMsg ? 'errmsg' : 'offscreen'}>{errMsg}</p>
        <h1>Running Wild - Connexion</h1>
        <form className="runningwild__login-form" onSubmit={handleSubmit}>
          {/* ********************************email input******************************* */}
          <label
            className="runningwild__login-form-label"
            htmlFor="email"
          >
            Votre Email:
          </label>
          <input
            type="text"
            className="runningwild__login-form-input"
            id="email"
            autoComplete="off"
            onChange={(e) => setUserEmail(e.target.value)}
            value={userEmail}
            required
          />
          <p id="uidnote" className={userEmail && !validEmail ? 'instructions' : 'offscreen'}>
            <FontAwesomeIcon icon={faInfoCircle} />
            Format d&apos;email invalide
          </p>
          {/* ********************************password input******************************* */}
          <label
            className="runningwild__login-form-label"
            htmlFor="password"
          >
            Mot de passe:
          </label>
          <input
            type="password"
            className="runningwild__login-form-input"
            id="password"
            onChange={(e) => setPwd(e.target.value)}
            value={pwd}
            required
          />
          {/* ********************************Sign in button******************************* */}
          <button
            className="runningwild__login-form-buton"
            type="submit"
            disabled={!!(!validEmail || !validPwd)}
          >
            Connexion
          </button>
        </form>
        <p>
          Mot de passe oublié ?
          <br />
          <span className="line">
            {/* put router link here */}
            <a href="#">Recevoir mes informations de connexion</a>
          </span>
        </p>
      </section>
      <section className="runningwild__login-right">
        <video alt="video of a runner in a field" autoPlay controls loop>
          <source src={runningVideo} type="video/webm" />
        </video>
      </section>
    </div>
  );
}

export default Login;
