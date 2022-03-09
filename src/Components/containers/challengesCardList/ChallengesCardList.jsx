import React, { useEffect, useState } from 'react';
// import PropTypes from 'prop-types';
import './challengesCardList.css';
import ChallengesCard from '../challengesCard/ChallengesCard';
import axios from '../../../api/axios';

// eslint-disable-next-line max-len
// Route progression non fonctionnelle, besoin d'accéder à cette donnée pour mettre à jour la currentvalue
// il faut accéder à la table user_challenge

const CHALLENGE_URL = '/challenge/all';
const PROGRESSION_URL = '/user/1/challenges';

function ChallengesCardList() {
  const [challenges, setChallenges] = useState([]);
  const [progression, setProgression] = useState([]);

  const getChallenges = async () => {
    const response = await axios.get(CHALLENGE_URL);
    const myChallenges = response.data.challenges;
    setChallenges(myChallenges);
  };

  const getProgression = async () => {
    const response = await axios.get(PROGRESSION_URL);
    const myProgression = response.data.progression;
    console.log(myProgression);
    setProgression(myProgression);
  };

  useEffect(() => getChallenges(), []);
  useEffect(() => getProgression(), []);

  return (
    <ul className="runningwild__challenges-content-cardList">
      {challenges.map((challenge) => (
        <li key={challenge.challenge_id}>
          <ChallengesCard
            title={challenge.name}
            illustration={challenge.challenge_image}
            text={challenge.description}
            currentValue={progression}
            maxValue={challenge.distance}
          />
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
