/* eslint-disable max-len */
/* eslint-disable no-plusplus */
import React, { useEffect, useState } from 'react';
// import PropTypes from 'prop-types';
import './challengesCardList.css';
import ChallengesCard from '../challengesCard/ChallengesCard';
import axios from '../../../api/axios';
import ProgressBar from '../progressBar/ProgressBar';

// eslint-disable-next-line max-len
// Route progression non fonctionnelle, besoin d'accéder à cette donnée pour mettre à jour la currentvalue
// il faut accéder à la table user_challenge
const USER_ID_URL = `${localStorage.getItem('id')}`;
console.log(USER_ID_URL);

// const CHALLENGES = `/user/${USER_ID_URL}/challenges`;
const CHALLENGES = '/user/3/challenges';
console.log(CHALLENGES);

console.log(CHALLENGES);
const CHALLENGES_ADD = '/user/challenge/add';
/* Use the variable id from localStorage (previsously stored in the login page)
to dynamically get the user's datas */

function ChallengesCardList() {
  const [challenges, setChallenges] = useState([]);
  const [acceptedChallenges, setAcceptedChallenges] = useState([]);

  const getChallenges = async () => {
    const response = await axios.get(CHALLENGES);
    const challengesAvailableList = response.data.challenges.available_challenges;
    const challengesSubscribedList = response.data.challenges.subscribed_challenges;
    setChallenges(challengesAvailableList);
    setAcceptedChallenges(challengesSubscribedList);
    console.log(challengesAvailableList);
    console.log(challengesSubscribedList);
  };

  // const [showButton, setShowButton] = useState(true);
  // const [showProgression, setShowProgression] = useState([]);

  const onButtonClick = async () => {
    try {
      // const userResponse = await axios.get(USER_ID_URL);
      const response = await axios.post(
        CHALLENGES_ADD,
        JSON.stringify({
          challengeId: 1,
          userId: USER_ID_URL,
        }),
        {
          headers: {
            'Content-Type': 'application/json',
          },
        },
      );
      console.log(JSON.stringify(response?.data));
    } catch (err) {
      console.log('Challenge déjà enregistré');
    }
  };
  //
  // useEffect(() => onButtonClick(), []);
  useEffect(() => getChallenges(), []);

  // Il faudrait que je map le bon tableau pour afficher les challenges
  // Il faudrait check si la boolean du challenge est true ou false pour afficher le bouton
  // Il faudrait afficher la progression du challenge dans la barre

  return (
    <ul className="runningwild__challenges-content-cardList">
      {challenges.map((challenge) => (
        <li key={challenge.challenge_id}>
          <ChallengesCard
            title={challenge.name}
            illustration={challenge.challenge_image}
            text={challenge.description}
          />
          <div className="runningwild__challenges-content-cardList_progression">
            <button className="runningwild__challenges-content-cardList_progression-button" type="button" onClick={onButtonClick}>Accepter le challenge</button>
          </div>
        </li>
      ))}
      {acceptedChallenges.map((challenge) => (
        <li key={challenge.challenge_id}>
          <ChallengesCard
            title={challenge.name}
            illustration={challenge.challenge_image}
            text={challenge.description}
          />
          <div className="runningwild__challenges-content-cardList_progression">
            <ProgressBar key={challenge.name} value={parseInt(challenge.progression, 10)} max={parseInt(challenge.distance, 10)} />
          </div>
        </li>
      ))}
    </ul>
  );
}

// ChallengesCardList.propTypes = {
//   className: PropTypes.string,
//   cardChallengesData: PropTypes.arrayOf(
//     PropTypes.shape({
//       title: PropTypes.string.isRequired,
//       text: PropTypes.string.isRequired,
//       illustration: PropTypes.string.isRequired,
//       currentValue: PropTypes.number.isRequired,
//       maxValue: PropTypes.number.isRequired,
//       id: PropTypes.number.isRequired,
//     }).isRequired,
//   ).isRequired,
// };

export default ChallengesCardList;
