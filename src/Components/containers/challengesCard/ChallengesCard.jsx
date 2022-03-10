import React from 'react';
import PropTypes from 'prop-types';
import './challengesCard.css';

function ChallengesCard({
  className,
  title,
  illustration,
  text,
}) {
  return (
    <div className={className}>
      <h1>{title}</h1>
      <img src={illustration} alt="illustration challenge" />
      <p>{text}</p>
    </div>
  );
}

ChallengesCard.propTypes = {
  className: PropTypes.string,
  title: PropTypes.string.isRequired,
  illustration: PropTypes.string.isRequired,
  text: PropTypes.string.isRequired,
};

ChallengesCard.defaultProps = {
  className: 'runningwild__challenges-content-card',
};

export default ChallengesCard;
