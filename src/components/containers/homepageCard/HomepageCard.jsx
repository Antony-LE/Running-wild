import React from 'react';
import PropTypes from 'prop-types';
import './homepageCard.css';

const homepageCard = ({
  className,
  title,
  illustration,
  text,
}) => (
  <div className={className}>
    <img src={illustration} alt="description" />
    <h1>{title}</h1>
    <p>{text}</p>
  </div>
);

homepageCard.propTypes = {
  className: PropTypes.string,
  title: PropTypes.string.isRequired,
  illustration: PropTypes.string.isRequired,
  text: PropTypes.string.isRequired,
};

homepageCard.defaultProps = {
  className: 'runningwild__homepage-content-card',
};

export default homepageCard;
