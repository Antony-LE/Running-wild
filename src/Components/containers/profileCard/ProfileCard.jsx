/* eslint-disable react/prop-types */
/* eslint-disable jsx-a11y/control-has-associated-label */
/* eslint-disable no-unused-vars */
import React, { useState } from 'react';
import './profileCard.css';

// Import of axios
import axios from '../../../api/axios';

/* Use the variable id from localStorage (previsously stored in the login page)
to dynamically get the user's datas */
const USER_ID_URL = `/user/${localStorage.getItem('id')}`;

function ProfileCard({
  className, name, role, rank, dateOfBirth, city, pseudo, about,
}) {
  const handleLocalStorage = async (e) => {
    const response = await axios.get(USER_ID_URL);
    // Stored all the datas relative to the user into the localStorage
    // localStorage.setItem('name', JSON.stringify(response.data.user_name));
    // localStorage.setItem('rank', JSON.stringify(response.data.user_rank_id));
    // localStorage.setItem('date Of Birth', JSON.stringify(response.data.user.dob));
    // localStorage.setItem('city', JSON.stringify(response.data.user.city));
    // localStorage.setItem('pseudo', JSON.stringify(response.data.user.pseudo));
    // localStorage.setItem('about', JSON.stringify(response.data.user.about));
    // localStorage.setItem('role', JSON.stringify(response.data.user.role_id));
    // console.log(response);
  };
  handleLocalStorage();
  return (
    <div className="runningwild_profileCard">
      <div className="runningwild_profileCard-upperContainer">
        <div className="runningwild_profileCard-imageContainer">
          <img src="https://www.infomoney.com.br/wp-content/uploads/2019/06/homer-simpson.jpg?fit=900%2C734&quality=75&strip=all" alt="" height="100px" width="100px" />
        </div>
      </div>
      <div className="runningwild_profileCard-lowerContainer">
        <h3>
          {name}
          <br />
          Your rank :
          {rank}
          <br />
          {dateOfBirth}
          <br />
          {city}
          <br />
        </h3>
        <h4>
          {pseudo}
        </h4>
        <p>{about}</p>
        <button type="button" className="runningwild-profile-card-lower-container-button">Détails...</button>
      </div>
    </div>
  );
}

export default ProfileCard;
