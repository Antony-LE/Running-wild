/* eslint-disable react/prop-types */
import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import './challengesCard.css';
import ProgressBar from '../progressBar/ProgressBar';

// Besoin de savoir si le challenge dispose d'une start date
// Si oui alors on montre la progression, sinon on doit créer la start date

// // Import of axios
// import axios from '../../../api/axios';

// const CHALLENGE_ACCEPTED_URL = '/challenge/all';

function ChallengesCard({
  className,
  title,
  illustration,
  text,
  currentValue,
  maxValue,
}) {
  const [showButton, setShowButton] = useState(true);
  const [showProgression, setShowProgression] = useState([]);
  const onButtonClick = async () => {
    // const response = await axios.get(CHALLENGE_ACCEPTED_URL);
    // const acceptedChallenge = response.data.challenges;
    // console.log(acceptedChallenge);
    setShowProgression(true);
    setShowButton(false);
  };

  useEffect(() => onButtonClick(), []);

  return (
    <div className={className}>
      <h1>{title}</h1>
      <img src={illustration} alt="description" />
      <p>{text}</p>
      <hr />
      {showButton ? <button className="runningwild__profile-button" type="button" onClick={onButtonClick}>Accepter le challenge</button> : null }
      {showProgression ? <ProgressBar key={title} value={currentValue} max={maxValue} /> : null}
    </div>
  );
}

ChallengesCard.propTypes = {
  className: PropTypes.string,
  title: PropTypes.string.isRequired,
  illustration: PropTypes.string.isRequired,
  text: PropTypes.string.isRequired,
  currentValue: PropTypes.string.isRequired,
  maxValue: PropTypes.string.isRequired,
};

ChallengesCard.defaultProps = {
  className: 'runningwild__challenges-content-card',
};

export default ChallengesCard;
