/* eslint-disable max-len */
/* eslint-disable react/prop-types */
/* eslint-disable jsx-a11y/control-has-associated-label */
/* eslint-disable no-unused-vars */
import React, { useState } from 'react';
import './profileCard.css';
import localPoint from '../../../Assets/localpoint.png';
import Avatar from '../../../Assets/avatar-default.png';
import emailIcon from '../../../Assets/email-icon.png';
import calendarIcon from '../../../Assets/calendar-icon.png';
import challengesIcon from '../../../Assets/challenges.png';
import medalIcon from '../../../Assets/medaille.png';

function ProfileCard({
  className, name, surname, role, rank, dateOfBirth, city, pseudo, about, avatar, email, subscription, challenges, achievements,
}) {
  const [detailsOn, setDetailsOn] = useState(false);
  const handleDisplayDetails = () => {
    setDetailsOn(!detailsOn);
  };
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
          {' '}
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

        {detailsOn
          ? (
            <>
              <span>
                {' '}
                <img src={emailIcon} alt="email icon" width="15px" height="15px" />
                {' '}
                {' '}
                {email.replaceAll('"', '')}
                {' '}
                <br />
              </span>
              <span>
                {' '}
                <img src={calendarIcon} alt="calendar icon" width="15px" height="15px" />
                {' '}
                Première connexion :
                {' '}
                {(subscription.split(':')[0]).replaceAll('"', '')}
              </span>
              <span>
                {' '}
                <img src={challengesIcon} alt="challenge icon" width="15px" height="15px" />
                {' '}
                Challenges en cours :
                {challenges}
              </span>
              <span>
                {' '}
                <img src={medalIcon} alt="medal icon" width="15px" height="15px" />
                {' '}
                Succès en cours :
                {' '}
                {achievements}
              </span>
            </>
          )
          : ''}
        <button type="button" className="runningwild-profile-card-lower-container-button" onClick={handleDisplayDetails}>
          {detailsOn === false ? (<>Plus de détails</>) : (<>Moins de détails</>)}
        </button>
      </div>
    </div>
  );
}

export default ProfileCard;
