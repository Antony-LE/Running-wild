/* eslint-disable max-len */
/* eslint-disable react/prop-types */
/* eslint-disable jsx-a11y/control-has-associated-label */
/* eslint-disable no-unused-vars */
import React, { useState } from 'react';
import './adminCard.css';
import uniqid from 'uniqid';
import localPoint from '../../../Assets/localpoint.png';
import Avatar from '../../../Assets/avatar-default.png';
// Import of axios
import axios from '../../../api/axios';

// Endpoint for all achievements
const ACHIEVEMENTS_ALL_URL = '/achievement/all';

function AdminCard({
  className, name, surname, role, rank, dateOfBirth, city, pseudo, about, avatar, email, subscription,
}) {
  const [displayAchievements, setDisplayAchievements] = useState(false);
  const [achievements, setAchievements] = useState([]);
  const [achievementsButtonDetails, setAchievementsButtonDetails] = useState(false);

  const handleDisplayAchievements = async (e) => {
    const responses = await axios.get(ACHIEVEMENTS_ALL_URL);
    console.log(responses.data.achievements);
    setAchievements(responses.data.achievements);
    setDisplayAchievements(!displayAchievements);
    setAchievementsButtonDetails(!achievementsButtonDetails);
  };
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
        <button type="button" className="runningwild-admin-card-lower-container-button" onClick={handleDisplayAchievements}>
          {achievementsButtonDetails ? ('Cacher les succès') : ('Consulter tous les succès')}
        </button>
        {displayAchievements ? (
          <div className="achievements">
            <h2>Liste des succès</h2>
            { achievements.map((achievement) => (
              <>
                <span>
                  ID :
                  {' '}
                  {achievement.achievement_id}
                  {' '}
                </span>
                <span>
                  Titre:
                  {' '}
                  {achievement.title}
                  {' '}
                </span>
                <span>
                  Description :
                  {' '}
                  {achievement.description}
                  {' '}
                </span>
                <span>
                  Nom du succès :
                  {' '}
                  {achievement.medal_name}
                  {' '}
                </span>
                <span />
                <hr />
              </>
            ))}
          </div>
        ) : ('')}
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

export default AdminCard;
