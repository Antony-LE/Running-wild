/* eslint-disable jsx-a11y/anchor-is-valid */
/* eslint-disable react/jsx-no-useless-fragment */
import React, { useState, useEffect } from 'react';

import './login.css';

// Import of npm icons and font from fontawesome.com
import { faCheck, faTimes, faInfoCircle } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

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
  // handle wether the user has succefully logged in or not
  const [success, setSuccess] = useState(false);
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
    setSuccess(true);
  };

  return (
    <>
      {success ? (
        <section className="runningWild__login">
          <h1>Bienvenue sur Running Wild !</h1>
          <p>
            <a href="#">Se connecter</a>
          </p>
        </section>
      ) : (
        <section className="runningWild__login">
          <p className={!errMsg ? 'errmsg' : 'offscreen'}>{errMsg}</p>
          <h1>Running Wild - Connexion</h1>
          <form className="runningWild__login-form" onSubmit={handleSubmit}>
            {/* ********************************email input******************************* */}
            <label htmlFor="email">
              Votre Email:
              <FontAwesomeIcon icon={faCheck} className={validEmail ? 'valid' : 'hide'} />
              {/* If we want to display or not the regex */}
              <FontAwesomeIcon icon={faTimes} className={validEmail || !userEmail ? 'hide' : 'invalid'} />
            </label>
            <input
              type="text"
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
            <label htmlFor="password">
              Mot de passe:
              <FontAwesomeIcon icon={faCheck} className={validPwd ? 'valid' : 'hide'} />
              {/* If we want to display or not the regex */}
              <FontAwesomeIcon icon={faTimes} className={validPwd || !pwd ? 'hide' : 'invalid'} />
            </label>
            <input
              type="password"
              id="password"
              onChange={(e) => setPwd(e.target.value)}
              value={pwd}
              required
            />
            <p id="pwdnote" className={pwd && !validPwd ? 'instructions' : 'offscreen'}>
              <FontAwesomeIcon icon={faInfoCircle} />
              8-24 caractères.
              <br />
              Votre mot de passe doit inclure au moins une lettre en majuscule
              et minuscule ainsi qu&apos;un caractère spécial
              <br />
              caractères spéciaux autorisés:
              {' '}
              <span>!</span>
              {' '}
              <span>@</span>
              {' '}
              <span>#</span>
              {' '}
              <span>$</span>
              {' '}
              <span>%</span>
            </p>
            {/* ********************************Sign in button******************************* */}
            <button
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
      )}
    </>
  );
}

export default Login;
