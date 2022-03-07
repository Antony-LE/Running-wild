/* eslint-disable react/prop-types */
/* eslint-disable jsx-a11y/control-has-associated-label */
/* eslint-disable no-unused-vars */
import React, { useState } from 'react';
import './profileCard.css';
import localPoint from '../../../Assets/localpoint.png';
import Avatar from '../../../Assets/avatar-default.png';

function ProfileCard({
  className, name, surname, role, rank, dateOfBirth, city, pseudo, about, avatar,
}) {
  return (
    <div className="runningwild_profileCard">
      <div className="runningwild_profileCard-upperContainer">
        <div className="runningwild_profileCard-imageContainer">
          <img src={Avatar} alt="avatar" height="100px" width="100px" />
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
