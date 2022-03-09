/* eslint-disable react/prop-types */
import React from 'react';
// import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import './challengesCard.css';
// import ProgressBar from '../progressBar/ProgressBar';

// Besoin de savoir si le challenge dispose d'une start date
// Si oui alors on montre la progression, sinon on doit créer la start date

// // Import of axios
// import axios from '../../../api/axios';

// const CHALLENGE_AVAILABLE = 'user/2/challenges/available';
// const CHALLENGES = 'user/2/challenges';

function ChallengesCard({
  className,
  title,
  illustration,
  text,
}) {
  // const [showButton, setShowButton] = useState(true);
  // const [showProgression, setShowProgression] = useState([]);
  // const onButtonClick = async () => {
  //   const response = await axios.get(CHALLENGE_AVAILABLE);
  //   const response2 = await axios.get(CHALLENGES);
  //   const challengeAvailable = response.data.challenges;
  //   const challengesList = response2.data.challenges;
  //   console.log(challengeAvailable);
  //   console.log(challengesList);

  //   if (challengesList === challengeAvailable) {
  //     setShowProgression(true);
  //     setShowButton(false);
  //   } else {
  //     setShowProgression(false);
  //     setShowButton(true);
  //   }
  // };

  // useEffect(() => onButtonClick(), []);

  return (
    <div className={className}>
      <h1>{title}</h1>
      <img src={illustration} alt="description" />
      <p>{text}</p>
    </div>
  );
}

ChallengesCard.propTypes = {
  className: PropTypes.string,
  title: PropTypes.string.isRequired,
  illustration: PropTypes.string.isRequired,
  text: PropTypes.string.isRequired,
  // currentValue: PropTypes.number.isRequired,
  // maxValue: PropTypes.number.isRequired,
};

ChallengesCard.defaultProps = {
  className: 'runningwild__challenges-content-card',
};

export default ChallengesCard;
