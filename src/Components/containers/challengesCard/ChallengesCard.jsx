/* eslint-disable react/prop-types */
import React, { useState } from 'react';
import PropTypes from 'prop-types';
import './challengesCard.css';
import ProgressBar from '../progressBar/ProgressBar';

function ChallengesCard({
  className,
  title,
  illustration,
  text,
  currentValue,
  maxValue,
  inscription,
}) {
  const [showButton, setShowButton] = useState(true);
  const [showProgression, setShowProgression] = useState(inscription);
  const onButtonClick = () => {
    setShowProgression(true);
    setShowButton(false);
  };
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
  inscription: PropTypes.bool,
};

ChallengesCard.defaultProps = {
  className: 'runningwild__challenges-content-card',
  inscription: false,
};

export default ChallengesCard;
