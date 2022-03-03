/* eslint-disable no-unused-vars */
/* eslint-disable jsx-a11y/label-has-associated-control */
/* eslint-disable jsx-a11y/media-has-caption */
/* eslint-disable jsx-a11y/anchor-is-valid */
/* eslint-disable react/jsx-no-useless-fragment */

import { NavLink } from 'react-router-dom';
import React, { useState, useEffect } from 'react';
import './forgotPassword.css';

// Import of axios
import axios from '../../api/axios';

const FORGOTPASSWORD_URL = '/user/recovery';

// Regex for the email validation ( exmaple@wanadoo.com format)
const EMAIL_REGEX = /^[\w-.]+@([\w-]+\.)+[\w-]{2,4}$/;

function ForgotPassword() {
  // handle states related to user
  const [userEmail, setUserEmail] = useState('');
  const [validEmail, setValidEmail] = useState(false);
  // handle error
  const [errMsg, setErrMsg] = useState('');
  // handle wether the user has succefully logged in or not
  const [success, setSuccess] = useState(false);

  // Handle the user's email input with regex
  useEffect(() => {
    setValidEmail(EMAIL_REGEX.test(userEmail));
    console.log(userEmail);
  }, [userEmail]);

  // Reboot the error message
  useEffect(() => {
    setErrMsg('');
  }, [userEmail]);

  // Handle the form submission
  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.post(
        FORGOTPASSWORD_URL,
        JSON.stringify({
          email: userEmail,
        }),
        {
          headers: {
            'Content-Type': 'application/json',
            withCredentials: true,
          },
        },
      );
      console.log(JSON.stringify(response?.data));
      setSuccess(true);
    } catch (err) {
      console.log(errMsg);
      setErrMsg('Server error');
    }
  };

  return (
    <>
      {success ? (
        <section className="runningwild__forgotpassword-success gradient__bg">
          <h1>
            Un nouveau mot de passe vous a été envoyé à l&apos;adresse suivante:
            {' '}
            <span>
              {userEmail}
            </span>
            , n&apos;oubliez pas de vérifier vos spams !
            {' '}
          </h1>
          <p>
            <NavLink to="/">
              Retour à la page de connexion
            </NavLink>
          </p>
        </section>
      ) : (
        <div className="runningwild__forgotpassword gradient">
          <p className={errMsg ? 'errmsg' : ''}>{errMsg}</p>
          <h1>Running Wild - Mot de passe oublié</h1>
          <form className="runningwild__forgotpassword-form" onSubmit={handleSubmit}>
            {/* ********************************email input******************************* */}
            <label
              className="runningwild__forgotpassword-form-label"
              htmlFor="email"
            >
              Merci de renseigner votre email
            </label>
            <input
              type="text"
              className="runningwild__forgotpassword-form-input"
              id="email"
              autoComplete="off"
              onChange={(e) => setUserEmail(e.target.value)}
              value={userEmail}
              required
            />
            {/* ********************************Sign in button******************************* */}
            <button
              className="runningwild__forgotpassword-form-button"
              type="submit"
              disabled={!validEmail}
            >
              Récupérer un nouveau mot de passe
            </button>
          </form>
        </div>
      )}
    </>
  );
}
export default ForgotPassword;
