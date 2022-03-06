/* eslint-disable react/prop-types */
/* eslint-disable jsx-a11y/control-has-associated-label */
/* eslint-disable no-unused-vars */
import React, { useState } from 'react';
import './profileCard.css';
import localPoint from '../../../Assets/localpoint.png';

// Import of axios
import axios from '../../../api/axios';

/* Use the variable id from localStorage (previsously stored in the login page)
to dynamically get the user's datas */
const USER_ID_URL = `/user/${localStorage.getItem('id')}`;

function ProfileCard({
  className, name, surname, role, rank, dateOfBirth, city, pseudo, about, avatar,
}) {
  const handleLocalStorage = async (e) => {
    const response = await axios.get(USER_ID_URL);
    // Stored all the datas relative to the user into the localStorage
    localStorage.setItem('name', JSON.stringify(response.data.user.name));
    localStorage.setItem('rank', JSON.stringify(response.data.user.rank_id));
    localStorage.setItem('date Of Birth', JSON.stringify(response.data.user.dob));
    localStorage.setItem('city', JSON.stringify(response.data.user.city));
    localStorage.setItem('pseudo', JSON.stringify(response.data.user.pseudo));
    localStorage.setItem('about', JSON.stringify(response.data.user.about));
    localStorage.setItem('role', JSON.stringify(response.data.user.role_id));
    localStorage.setItem('avatar', JSON.stringify(response.data.user.avatar));
    localStorage.setItem('surname', JSON.stringify(response.data.user.surname));
    console.log(response);
  };
  handleLocalStorage();
  return (
    <div className="runningwild_profileCard">
      <div className="runningwild_profileCard-upperContainer">
        <div className="runningwild_profileCard-imageContainer">
          <img src={avatar} alt="" height="100px" width="100px" />
        </div>
      </div>
      <div className="runningwild_profileCard-lowerContainer">
        <h2>
          {name.replaceAll('"', '')}
          {' '}
          {surname.replaceAll('"', '')}
          <br />
        </h2>
        <h2>
          Rank :
          {rank}
        </h2>
        <h3>
          <img src={localPoint} width="20px" height="20px" alt="map point" />
          {city.replaceAll('"', '')}
        </h3>
        <br />
        <h4>
          Votre Pseudo :
          {' '}
          {pseudo.replaceAll('"', '')}
        </h4>
        <hr />
        <button type="button" className="runningwild-profile-card-lower-container-button">Plus de détails</button>
      </div>
    </div>
  );
}

export default ProfileCard;
