import React from 'react';
import PropTypes from 'prop-types';
import './challengesCardList.css';
import ChallengesCard from '../challengesCard/ChallengesCard';

function ChallengesCardList({ className, cardChallengesData }) {
  return (
    <div className={className}>
      {cardChallengesData.map(({
        title,
        illustration,
        text,
        currentValue,
        maxValue,
        id,
      }) => (
        <ChallengesCard
          title={title}
          key={id}
          illustration={illustration}
          text={text}
          currentValue={currentValue}
          maxValue={maxValue}
        />
      ))}
    </div>
  );
}

ChallengesCardList.propTypes = {
  className: PropTypes.string,
  cardChallengesData: PropTypes.arrayOf(
    PropTypes.shape({
      title: PropTypes.string.isRequired,
      text: PropTypes.string.isRequired,
      illustration: PropTypes.string.isRequired,
      currentValue: PropTypes.number.isRequired,
      maxValue: PropTypes.number.isRequired,
      id: PropTypes.number.isRequired,
    }).isRequired,
  ).isRequired,
};

ChallengesCardList.defaultProps = {
  className: 'runningwild__homepage-content-cardList',
};

export default ChallengesCardList;
