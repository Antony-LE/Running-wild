/* eslint-disable no-unused-vars */
/* eslint-disable jsx-a11y/anchor-is-valid */
/* eslint-disable react/jsx-no-useless-fragment */
import React, { useState, useEffect } from 'react';

import './registration.css';

// Import of npm icons and font from fontawesome.com
import { faCheck, faTimes, faInfoCircle } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

// Import of axios
import axios from '../../api/axios';

const REGISTER_URL = '/user';

/* Regex for the firstname, lastname, pseudo validation (must start with lower or uppercase letter,
following with lower or uppercase letter or digits or underscore, at least 3 to 23 characters  ) */
const USER_REGEX = /^[A-Za-zÀ-ÖØ-öø-ÿ][A-Za-zÀ-ÖØ-öø-ÿ-9-_]{1,23}$/;
// Regex for the email validation ( exmaple@wanadoo.com format)
const EMAIL_REGEX = /^[\w-.]+@([\w-]+\.)+[\w-]{2,4}$/;
// Regex for the postal code validation (5 digits only)
const ZIPCODE_REGEX = /^[0-9]*$/;
// Regex for the birthdate validation (YYYY//MM/DD format)
const BIRTHDATE_REGEX = /^[0-9]{4}\/[0-9]{2}\/[0-9]{2}$/;
// Regex for the city validation (1 to 45 letters only)
const CITY_REGEX = /^[A-z--]{1,45}$/;
// Regex for the gender validation ("man", "women", "neutral")
const GENDER_REGEX = /^(?:h|H|homme|Homme|f|F|femme|Femme|n|N|neutre|Neutre)$/;
/* Regex for the username validation (at least one character lower,
one character upper, one digit ,one special characters and 8 to 24 characters ) */
const PWD_REGEX = /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%]).{8,24}$/;

function Registration() {
  // handle states related to user
  const [userFirstname, setUserFirstname] = useState('');
  const [validFirstname, setValidFirstname] = useState(false);

  const [userLastname, setUserLastname] = useState('');
  const [validLastname, setValidLastname] = useState(false);

  const [userPseudo, setUserPseudo] = useState('');
  const [validPseudo, setValidPseudo] = useState(false);

  const [userEmail, setUserEmail] = useState('');
  const [validEmail, setValidEmail] = useState(false);

  const [userDateOfBirth, setUserDateOfBirth] = useState('');
  const [validDateOfBirth, setValidDateOfBirth] = useState(false);

  const [userPostalcode, setUserPostalcode] = useState();
  const [validPostalCode, setValidPostalCode] = useState(false);

  const [userCity, setUserCity] = useState('');
  const [validCity, setValidCity] = useState(false);

  const [userGender, setUserGender] = useState('');
  const [validGender, setValidGender] = useState(false);

  // handle states related to paswword
  const [pwd, setPwd] = useState('');
  const [validPwd, setValidPwd] = useState(false);

  // handle states related to confirm password
  const [matchPwd, setMatchPwd] = useState('');
  const [validMatch, setValidMatch] = useState(false);

  // handle wether the user has succefully logged in or not
  const [success, setSuccess] = useState(false);

  // handle error
  const [errMsg, setErrMsg] = useState('');

  // Handle the user's inputs with regex for each input
  useEffect(() => {
    setValidFirstname(USER_REGEX.test(userFirstname));
    // console.log(userFirstname);
  }, [userFirstname]);

  useEffect(() => {
    setValidLastname(USER_REGEX.test(userLastname));
    // console.log(userLastname);
  }, [userLastname]);

  useEffect(() => {
    setValidPseudo(USER_REGEX.test(userPseudo));
    // console.log(userLastname);
  }, [userPseudo]);

  useEffect(() => {
    setValidPostalCode(ZIPCODE_REGEX.test(userPostalcode));
    // console.log(userPostalcode);
  }, [userPostalcode]);

  useEffect(() => {
    setValidCity(CITY_REGEX.test(userCity));
    // console.log(userCity);
  }, [userCity]);

  useEffect(() => {
    setValidEmail(EMAIL_REGEX.test(userEmail));
    // console.log(userEmail);
  }, [userEmail]);

  useEffect(() => {
    setValidDateOfBirth(BIRTHDATE_REGEX.test(userDateOfBirth));
    // console.log(userDateOfBirth);
  }, [userDateOfBirth]);

  useEffect(() => {
    setValidGender(GENDER_REGEX.test(userGender));
    // console.log(userGender);
  }, [userGender]);

  // Handle both password and confirmed password validation
  useEffect(() => {
    const result = PWD_REGEX.test(pwd);
    // console.log(pwd);
    setValidPwd(result);
    // check if the confirmed password matches the password (boolean)
    const match = pwd === matchPwd;
    setValidMatch(match);
    // console.log(match);
  }, [pwd, matchPwd]);

  // check if the matchpassword matches the password (boolean)
  useEffect(() => {
    setErrMsg('');
  }, [userFirstname,
    userLastname,
    userEmail,
    userPseudo,
    userPostalcode,
    userCity,
    userGender,
    userDateOfBirth,
    pwd,
    matchPwd]);

  // Handle the form submission
  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.post(
        REGISTER_URL,
        JSON.stringify({
          email: userEmail,
          name: userFirstname,
          surname: userLastname,
          dob: userDateOfBirth,
          sex: userGender,
          pseudo: userPseudo,
          password: pwd,
          city: userCity,
          postcode: userPostalcode,
        }),
        {
          headers: {
            'Content-Type': 'application/json',
            withCredentials: true,
          },
        },
      );
      console.log(response);
      setSuccess(true);
    } catch (error) {
      console.log(error);
      setErrMsg('Registration error !');
    }
  };

  return (
    <>
      {success ? (
        <section className="runningWild__registration">
          <h1>Bienvenue sur Running Wild !</h1>
          <p>
            <a href="#">Se connecter</a>
          </p>
        </section>
      ) : (
        <section className="runningWild__registration gradient__bg">
          <p className={errMsg ? 'errmsg' : 'offscreen'}>{errMsg}</p>
          <h1>Running Wild - S&apos;inscrire</h1>
          <form className="runningWild__registration-form" onSubmit={handleSubmit}>
            {/* ********************************firstname input******************************* */}
            <label className="runningwild__registration-form-label" htmlFor="firstname">
              Votre Prénom:
              <FontAwesomeIcon icon={faCheck} className={validFirstname ? 'valid' : 'hide'} />
              {/* If we want to display or not the regex */}
              <FontAwesomeIcon icon={faTimes} className={validFirstname || !userFirstname ? 'hide' : 'invalid'} />
            </label>
            <input
              type="text"
              className="runningwild__registration-form-input"
              id="firstname"
              autoComplete="off"
              onChange={(e) => setUserFirstname(e.target.value)}
              value={userFirstname}
              required
            />
            <p id="uidnote" className={userFirstname && !validFirstname ? 'instructions' : 'offscreen'}>
              <FontAwesomeIcon icon={faInfoCircle} />
              4-24 caractères.
              <br />
              Votre prénom doit commencer par une lettre.
              <br />
              Les lettres, chiffres, underscores et traits d&apos;union sont autorisés
            </p>
            {/* ********************************lastname input******************************* */}
            <label
              className="runningwild__registration-form-label"
              htmlFor="lastname"
            >
              Votre Nom:
              <FontAwesomeIcon icon={faCheck} className={validLastname ? 'valid' : 'hide'} />
              {/* If we want to display or not the regex */}
              <FontAwesomeIcon icon={faTimes} className={validLastname || !userLastname ? 'hide' : 'invalid'} />
            </label>
            <input
              type="text"
              className="runningwild__registration-form-input"
              id="lastname"
              autoComplete="off"
              onChange={(e) => setUserLastname(e.target.value)}
              value={userLastname}
              required
            />
            <p id="uidnote" className={userLastname && !validLastname ? 'instructions' : 'offscreen'}>
              <FontAwesomeIcon icon={faInfoCircle} />
              4-24 caractères.
              <br />
              Votre nom doit commencer par une lettre.
              <br />
              Les lettres, chiffres, underscores et traits d&apos;union sont autorisés
            </p>
            {/* ********************************email input******************************* */}
            <label
              className="runningwild__registration-form-label"
              htmlFor="email"
            >
              Votre Email:
              <FontAwesomeIcon icon={faCheck} className={validEmail ? 'valid' : 'hide'} />
              {/* If we want to display or not the regex */}
              <FontAwesomeIcon icon={faTimes} className={validEmail || !userEmail ? 'hide' : 'invalid'} />
            </label>
            <input
              type="text"
              className="runningwild__registration-form-input"
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
            {/* ********************************pseudo input******************************* */}
            <label
              className="runningwild__registration-form-label"
              htmlFor="pseudo"
            >
              Votre Pseudo:
              <FontAwesomeIcon icon={faCheck} className={validPseudo ? 'valid' : 'hide'} />
              {/* If we want to display or not the regex */}
              <FontAwesomeIcon icon={faTimes} className={validPseudo || !userPseudo ? 'hide' : 'invalid'} />
            </label>
            <input
              type="text"
              className="runningwild__registration-form-input"
              id="pseudo"
              autoComplete="off"
              onChange={(e) => setUserPseudo(e.target.value)}
              value={userPseudo}
              required
            />
            <p id="uidnote" className={userPseudo && !validPseudo ? 'instructions' : 'offscreen'}>
              <FontAwesomeIcon icon={faInfoCircle} />
              4-24 caractères.
              <br />
              Votre pseudo doit commencer par une lettre.
              <br />
              Les lettres, chiffres, underscores et traits d&apos;union sont autorisés
            </p>
            {/* ********************************postalcode input******************************* */}
            <label
              className="runningwild__registration-form-label"
              htmlFor="postalcode"
            >
              Votre Code Postal:
              <FontAwesomeIcon icon={faCheck} className={validPostalCode ? 'valid' : 'hide'} />
              {/* If we want to display or not the regex */}
              <FontAwesomeIcon icon={faTimes} className={validPostalCode || !userPostalcode ? 'hide' : 'invalid'} />
            </label>
            <input
              type="text"
              className="runningwild__registration-form-input"
              id="postalcode"
              autoComplete="off"
              onChange={(e) => setUserPostalcode(e.target.value)}
              value={userPostalcode}
              required
            />
            <p id="uidnote" className={userPostalcode && !validPostalCode ? 'instructions' : 'offscreen'}>
              <FontAwesomeIcon icon={faInfoCircle} />
              5 chiffres.
              <br />
              Votre code postal doit comporter 5 chiffres.
            </p>
            {/* ********************************city input******************************* */}
            <label
              className="runningwild__registration-form-label"
              htmlFor="city"
            >
              Votre ville de résidence:
              <FontAwesomeIcon icon={faCheck} className={validCity ? 'valid' : 'hide'} />
              {/* If we want to display or not the regex */}
              <FontAwesomeIcon icon={faTimes} className={validCity || !userCity ? 'hide' : 'invalid'} />
            </label>
            <input
              type="text"
              className="runningwild__registration-form-input"
              id="city"
              autoComplete="off"
              onChange={(e) => setUserCity(e.target.value)}
              value={userCity}
              required
            />
            <p id="uidnote" className={userCity && !validCity ? 'instructions' : 'offscreen'}>
              <FontAwesomeIcon icon={faInfoCircle} />
              1-45 caractères.
              <br />
              Votre ville doit comporter uniquement des lettres.
            </p>
            {/* ********************************Birthdate input******************************* */}
            <label
              className="runningwild__registration-form-label"
              htmlFor="birthdate"
            >
              Votre date de naissance:
              <FontAwesomeIcon icon={faCheck} className={validDateOfBirth ? 'valid' : 'hide'} />
              {/* If we want to display or not the regex */}
              <FontAwesomeIcon icon={faTimes} className={validDateOfBirth || !userDateOfBirth ? 'hide' : 'invalid'} />
            </label>
            <input
              type="text"
              className="runningwild__registration-form-input"
              id="birthdate"
              placeholder="aaaa/mm/jj"
              autoComplete="off"
              onChange={(e) => setUserDateOfBirth(e.target.value)}
              value={userDateOfBirth}
              required
            />
            <p id="uidnote" className={userDateOfBirth && !validDateOfBirth ? 'instructions' : 'offscreen'}>
              <FontAwesomeIcon icon={faInfoCircle} />
              format AAAA/MM/JJ
            </p>
            {/* ********************************gender input******************************* */}
            <label
              className="runningwild__registration-form-label"
              htmlFor="gender"
            >
              Genre:
              <FontAwesomeIcon icon={faCheck} className={validGender ? 'valid' : 'hide'} />
              {/* If we want to display or not the regex */}
              <FontAwesomeIcon icon={faTimes} className={validGender || !userGender ? 'hide' : 'invalid'} />
            </label>
            <input
              type="text"
              className="runningwild__registration-form-input"
              id="gender"
              placeholder="Homme / Femme / Neutre"
              autoComplete="off"
              onChange={(e) => setUserGender(e.target.value)}
              value={userGender}
              required
            />
            <p id="uidnote" className={userGender && !validGender ? 'instructions' : 'offscreen'}>
              <FontAwesomeIcon icon={faInfoCircle} />
              Homme / Femme / Neutre
            </p>
            {/* ********************************password input******************************* */}
            <label
              className="runningwild__registration-form-label"
              htmlFor="password"
            >
              Mot de passe:
              <FontAwesomeIcon icon={faCheck} className={validPwd ? 'valid' : 'hide'} />
              {/* If we want to display or not the regex */}
              <FontAwesomeIcon icon={faTimes} className={validPwd || !pwd ? 'hide' : 'invalid'} />
            </label>
            <input
              type="password"
              className="runningwild__registration-form-input"
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
            {/* ********************************Confirm password input************************* */}
            <label
              className="runningwild__registration-form-label"
              htmlFor="confirm_pwd"
            >
              Confirmez votre mot de passe:
              <FontAwesomeIcon icon={faCheck} className={validMatch && matchPwd ? 'valid' : 'hide'} />
              {/* If we want to display or not the regex */}
              <FontAwesomeIcon icon={faTimes} className={validMatch || !matchPwd ? 'hide' : 'invalid'} />
            </label>
            <input
              type="password"
              className="runningwild__registration-form-input"
              id="confirm_pwd"
              onChange={(e) => setMatchPwd(e.target.value)}
              value={matchPwd}
              required
            />
            <p id="confirmnote" className={!validMatch ? 'instructions' : 'offscreen'}>
              <FontAwesomeIcon icon={faInfoCircle} />
              Vos mots de passe doivent être identiques.
            </p>
            {/* ********************************Sign up button******************************* */}
            <button
              className="runningwild__registration-form-button"
              type="submit"
              disabled={!!(!validFirstname
            || !validLastname
            || !validPseudo
            || !validEmail
            || !validPostalCode
            || !validCity
            || !validDateOfBirth
            || !validGender
            || !validPwd
            || !validMatch)}
            >
              S&apos;inscrire
            </button>
          </form>
          <a href="#"> CGU</a>
          <a href="#"> Déjà enregistré ?</a>
        </section>
      )}
    </>
  );
}

export default Registration;
