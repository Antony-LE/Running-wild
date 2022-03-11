/* eslint-disable jsx-a11y/iframe-has-title */
/* eslint-disable max-len */
/* eslint-disable react/prop-types */
/* eslint-disable jsx-a11y/control-has-associated-label */
/* eslint-disable no-unused-vars */
import React, { useState } from 'react';
import './adminCard.css';
import localPoint from '../../../Assets/localpoint.png';
import Avatar from '../../../Assets/avatar-default.png';
// Import of axios
import axios from '../../../api/axios';

// Endpoint for all achievements
const ACHIEVEMENTS_ALL_URL = '/achievement/all';
// Endpoint for all challenges
const CHALLENGES_ALL_URL = '/challenge/all';
// Endpoint for all visitors
const VISITORS_ALL_URL = `/user/${localStorage.getItem('id')}/connections`;

function AdminCard({
  className, name, surname, role, rank, dateOfBirth, city, pseudo, about, avatar, email, subscription,
}) {
  const [displayAchievements, setDisplayAchievements] = useState(false);
  const [achievements, setAchievements] = useState([]);
  const [achievementsButtonDetails, setAchievementsButtonDetails] = useState(false);

  const [displayChallenges, setDisplayChallenges] = useState(false);
  const [challenges, setChallenges] = useState([]);
  const [challengesButtonDetails, setChallengesButtonDetails] = useState(false);

  const [displayVisitors, setDisplayVisitors] = useState(false);
  const [visitors, setVisitors] = useState([]);
  const [visitorsButtonDetails, setVisitorsButtonDetails] = useState(false);

  const handleDisplayAchievements = async (e) => {
    const responses = await axios.get(ACHIEVEMENTS_ALL_URL);
    console.log(responses.data.achievements);
    setAchievements(responses.data.achievements);
    setDisplayAchievements(!displayAchievements);
    setAchievementsButtonDetails(!achievementsButtonDetails);
  };

  const handleDisplayChallenges = async (e) => {
    const responses = await axios.get(CHALLENGES_ALL_URL);
    console.log(responses.data.challenges);
    setChallenges(responses.data.challenges);
    setDisplayChallenges(!displayChallenges);
    setChallengesButtonDetails(!challengesButtonDetails);
  };

  const handleDisplayVisitors = async (e) => {
    const responses = await axios.get(VISITORS_ALL_URL);
    console.log(responses.data.connections);
    setVisitors(responses.data.connections.length);
    setDisplayVisitors(!displayVisitors);
    setVisitorsButtonDetails(!visitorsButtonDetails);
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
        <button type="button" className="runningwild-admin-card-lower-container-button" onClick={handleDisplayChallenges}>
          {challengesButtonDetails ? ('Cacher les challenges') : ('Consulter tous les challenges')}
        </button>
        {displayChallenges ? (
          <div className="challenges">
            <h2>Liste des challenges</h2>
            { challenges.map((challenge) => (
              <>
                <span>
                  ID :
                  {' '}
                  {challenge.challenge_id}
                  {' '}
                </span>
                <span>
                  Titre:
                  {' '}
                  {challenge.name}
                  {' '}
                </span>
                <span>
                  Description :
                  {' '}
                  {challenge.description}
                  {' '}
                </span>
                <span>
                  Date de début :
                  {' '}
                  {(challenge.start_date.split(':')[0]).replaceAll('"', '')}
                  {' '}
                </span>
                <span>
                  Date limite :
                  {' '}
                  {(challenge.end_date.split(':')[0]).replaceAll('"', '')}
                  {' '}
                </span>
                <span>
                  Distance :
                  {' '}
                  {`${challenge.distance}km`}
                  {' '}
                </span>
                <span />
                <span>
                  Points rapportés :
                  {' '}
                  {challenge.bonus_points}
                  {' '}
                </span>
                <hr />
              </>
            ))}
          </div>
        ) : ('')}
        <button type="button" className="runningwild-admin-card-lower-container-button" onClick={handleDisplayVisitors}>
          {visitorsButtonDetails ? ('Nombre de visites') : ('Cacher nombre de visites')}
        </button>
        {displayVisitors ? (
          <div className="visitors">
            <h2>
              {' '}
              Votre nombre de visites à ce jour :
              {' '}
              {visitors}
            </h2>
          </div>
        ) : ('')}
      </div>
    </div>
  );
}

export default AdminCard;
