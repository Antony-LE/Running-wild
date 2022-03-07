/* eslint-disable max-len */
/* eslint-disable react/prop-types */
/* eslint-disable jsx-a11y/control-has-associated-label */
/* eslint-disable no-unused-vars */
import React, { useState } from 'react';
import './adminCard.css';
import localPoint from '../../../Assets/localpoint.png';
import Avatar from '../../../Assets/avatar-default.png';
import emailIcon from '../../../Assets/email-icon.png';
import calendarIcon from '../../../Assets/calendar-icon.png';

function ProfileCard({
  className, name, surname, role, rank, dateOfBirth, city, pseudo, about, avatar, email, subscription,
}) {
  return (
    <div className="runningwild_adminCard">
      <div className="runningwild_adminCard-upperContainer">
        <div className="runningwild_adminCard-imageContainer">
          <img src={Avatar} alt="avatar" height="100px" width="100px" />
        </div>
      </div>
      <div className="runningwild_adminCard-lowerContainer">
        <h2>
          {name.replaceAll('"', '')}
          {' '}
          {surname.replaceAll('"', '')}
          <br />
        </h2>
        <h2>
          Statut Admin
        </h2>
        <h3>
          <img src={localPoint} width="20px" height="20px" alt="map point" />
          {city.replaceAll('"', '')}
        </h3>
        <br />
        <h4>
          Quelle action souhaitez-vous exécuter ?
        </h4>
        <hr />

        <button type="button" className="runningwild-admin-card-lower-container-button">
          Consulter tous les succès
        </button>
        <button type="button" className="runningwild-admin-card-lower-container-button">
          Consulter tous les challenges
        </button>
        <button type="button" className="runningwild-admin-card-lower-container-button">
          Voir le nombre de visiteurs
        </button>
      </div>
    </div>
  );
}

export default ProfileCard;
