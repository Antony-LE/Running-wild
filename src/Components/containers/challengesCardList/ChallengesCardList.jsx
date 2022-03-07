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
      }) => (
        <ChallengesCard
          title={title}
          key={title}
          illustration={illustration}
          text={text}
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
    }).isRequired,
  ).isRequired,
};

ChallengesCardList.defaultProps = {
  className: 'runningwild__homepage-content-cardList',
};

export default ChallengesCardList;
