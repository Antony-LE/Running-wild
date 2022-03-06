/* eslint-disable react/prop-types */
/* eslint-disable jsx-a11y/control-has-associated-label */
/* eslint-disable no-unused-vars */
import React, { useState } from 'react';
import './profileCard.css';

function ProfileCard({
  name, rank, dateOfBirth, city, pseudo, about,
}) {
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
