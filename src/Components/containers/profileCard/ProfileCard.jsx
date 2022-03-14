/* eslint-disable max-len */
/* eslint-disable react/prop-types */
/* eslint-disable jsx-a11y/control-has-associated-label */
/* eslint-disable no-unused-vars */
import React, { useState } from 'react';
import PropTypes from 'prop-types';
import './profileCard.css';
import localPoint from '../../../Assets/localpoint.png';
import Avatar from '../../../Assets/avatar-default.png';
import emailIcon from '../../../Assets/email-icon.png';
import calendarIcon from '../../../Assets/calendar-icon.png';
import challengesIcon from '../../../Assets/challenges.png';
import medalIcon from '../../../Assets/medaille.png';

function ProfileCard({
  name, surname, rank, city, pseudo, avatar, email, subscription, challenges, achievements, totalPoints, totalKm, totalBonusPoints,
}) {
  // Display the user's details
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
        <h3>
          Votre Pseudo :
          {' '}
          {pseudo.replaceAll('"', '')}
        </h3>
        <h4>
          Total de points :
          {' '}
          {totalPoints}
        </h4>
        <h4>
          Total de Km Parcourus :
          {' '}
          {totalKm}
        </h4>
        <h4>
          Total de points bonus acquis :
          {' '}
          {totalBonusPoints}
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
                {' '}
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

ProfileCard.propTypes = {
  name: PropTypes.string,
  surname: PropTypes.string,
  city: PropTypes.string,
  pseudo: PropTypes.string,
  avatar: PropTypes.string,
  email: PropTypes.string,
  subscription: PropTypes.string,
  achievements: PropTypes.string,
};

ProfileCard.defaultProps = {
  name: '',
  surname: '',
  city: '',
  pseudo: '',
  avatar: '',
  email: '',
  subscription: '',
  achievements: '',
};

export default React.memo(ProfileCard);
