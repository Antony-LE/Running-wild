/* eslint-disable no-unused-vars */
/* eslint-disable jsx-a11y/label-has-associated-control */
/* eslint-disable jsx-a11y/media-has-caption */
/* eslint-disable jsx-a11y/anchor-is-valid */
/* eslint-disable react/jsx-no-useless-fragment */
import { NavLink } from 'react-router-dom';
import React, { useState, useEffect } from 'react';
import './login.css';
import logo from '../../Assets/wildwhite.png';

import runningVideo from '../../Assets/runnerback.webm';

// Import of axios
import axios from '../../api/axios';

const LOGIN_URL = '/user/login';

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
  const [errMsg, setErrMsg] = useState('');
  // handle wether the user has succefully logged in or not
  const [success, setSuccess] = useState(false);

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

  // Reboot the error message
  useEffect(() => {
    setErrMsg('');
  }, [userEmail, pwd]);

  // Handle the form submission
  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.post(
        LOGIN_URL,
        JSON.stringify({
          email: userEmail,
          password: pwd,
        }),
        {
          headers: {
            'Content-Type': 'application/json',
            'Access-Control-Allow-Origin': '*',
          },

        },
      );
      console.log(JSON.stringify(response?.data));
      if (response.data.result === true) {
        setSuccess(true);
      } else {
        setSuccess(false);
        setErrMsg(response.data.description);
      }
    } catch (err) {
      console.log(errMsg);
    }
  };

  return (
    <>
      {success ? (
        <section className="runningwild__login-success">
          <img src={logo} alt="logo running wild" />
          <div className="runningwild__login-success-text">
            <p>Vous êtes connecté !</p>
            <NavLink to="/homepage">
              <h1>Aller vers la page d&apos;accueil</h1>
            </NavLink>
          </div>
        </section>
      ) : (
        <div className="runningwild__login-container">
          <section className="runningwild__login-left gradient__bg">
            <img src={logo} alt="logo running wild" />
            <p className={errMsg ? 'errmsg' : ''}>{errMsg}</p>
            <h1>Running Wild - Connexion</h1>
            <form className="runningwild__login-form" onSubmit={handleSubmit}>
              {/* ********************************email input******************************* */}
              <label
                className="runningwild__login-form-label"
                htmlFor="email"
              >
                Email
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
              {/* ********************************password input******************************* */}
              <label
                className="runningwild__login-form-label"
                htmlFor="password"
              >
                Mot de passe
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
                className="runningwild__login-form-button"
                type="submit"
                disabled={!!(!validEmail || !validPwd)}
              >
                Connexion
              </button>
              <NavLink to="/forgot-password">
                Mot de passe oublié ?
              </NavLink>
            </form>
            <NavLink to="/inscription">
              <button
                className="runningwild__login-form-button-registration"
                type="submit"
              >
                Créer un compte
              </button>
            </NavLink>
            <p>
              <br />
              <span className="line">
                {/* put router link here */}
              </span>
            </p>
          </section>
          <section className="runningwild__login-right">
            <video alt="video of a runner from the back" controls autoPlay muted loop>
              <source src={runningVideo} type="video/webm" />
            </video>
          </section>
        </div>
      )}
    </>
  );
}
export default Login;
