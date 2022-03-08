import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import './challengesCardList.css';
import ChallengesCard from '../challengesCard/ChallengesCard';
import axios from '../../../api/axios';

const CHALLENGE_URL = '/challenge/all';

function ChallengesCardList({ className }) {
  const [challenges, setChallenges] = useState([]);

  const getChallenges = async () => {
    const response = await axios.get(CHALLENGE_URL);
    const myChallenges = response.data.challenges;
    setChallenges(myChallenges);
  };

  useEffect(() => getChallenges(), []);

  return (
    <div className={className}>
      {challenges.map((challenge) => (
        <ChallengesCard
          title={challenge.name}
          key={challenge.challenge_id}
          illustration={challenge.challenge_image}
          text={challenge.description}
          currentValue={challenge.distance}
          maxValue={challenge.distance}
        />
      ))}
    </div>
  );
}

ChallengesCardList.propTypes = {
  className: PropTypes.string,
  // cardChallengesData: PropTypes.arrayOf(
  //   PropTypes.shape({
  //     title: PropTypes.string.isRequired,
  //     text: PropTypes.string.isRequired,
  //     illustration: PropTypes.string.isRequired,
  //     currentValue: PropTypes.number.isRequired,
  //     maxValue: PropTypes.number.isRequired,
  //     id: PropTypes.number.isRequired,
  //   }).isRequired,
  // ).isRequired,
};

ChallengesCardList.defaultProps = {
  className: 'runningwild__homepage-content-cardList',
};

export default ChallengesCardList;
