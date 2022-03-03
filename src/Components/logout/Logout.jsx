/* eslint-disable no-unused-vars */
/* eslint-disable jsx-a11y/label-has-associated-control */
/* eslint-disable jsx-a11y/media-has-caption */
/* eslint-disable jsx-a11y/anchor-is-valid */
/* eslint-disable react/jsx-no-useless-fragment */
import { NavLink } from 'react-router-dom';
import React, { useState } from 'react';
import './logout.css';

// Import of axios
import axios from '../../api/axios';

// handle error
// const [errMsg, setErrMsg] = useState('');

const LOGOUT_URL = '/user/logout';

function Logout() {
  // handle wether the user is logged in or not
  const [success, setSuccess] = useState(true);
  // Handle the form submission
  const handleClick = async (e) => axios.get(LOGOUT_URL);

  return (
    <div className="runningwild__logout">
      <NavLink to="/">
        <button type="button" onClick={handleClick}>Se déconnecter</button>
      </NavLink>
    </div>
  );
}
export default Logout;
