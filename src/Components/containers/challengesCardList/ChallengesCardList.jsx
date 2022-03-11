/* eslint-disable max-len */
/* eslint-disable no-plusplus */
import React, { useEffect, useState } from 'react';
// import PropTypes from 'prop-types';
import './challengesCardList.css';
import ChallengesCard from '../challengesCard/ChallengesCard';
import axios from '../../../api/axios';
import ProgressBar from '../progressBar/ProgressBar';

/* Use the variable id from localStorage (previsously stored in the login page)
to dynamically get the user's datas */
const USER_ID_URL = `${localStorage.getItem('id')}`;
/* Fetching the challenges depanding on the user id of the localStorage */
const CHALLENGES = `/user/${USER_ID_URL}/challenges`;

const CHALLENGES_ADD = '/user/challenge/add';

function ChallengesCardList() {
  const [challenges, setChallenges] = useState([]);
  const [acceptedChallenges, setAcceptedChallenges] = useState([]);
  const [challengeID, setChallengeId] = useState([]);

  const getChallenges = async () => {
    const response = await axios.get(CHALLENGES);
    // fetching the challenges available to the user
    const challengesAvailableList = response.data.challenges.available_challenges;
    // fetching the challenges already subscribed by the user
    const challengesSubscribedList = response.data.challenges.subscribed_challenges;
    // injecting the data in the states
    setChallenges(challengesAvailableList);
    setAcceptedChallenges(challengesSubscribedList);
    console.log(challengesAvailableList);
    console.log(challengesSubscribedList);
  };

  const onButtonClick = async () => {
    try {
      // sending the data to the database, the id of the challenge clicked and the
      // user id thanks to the local storage

      const response = await axios.post(
        CHALLENGES_ADD,
        JSON.stringify({
          challengeId: challengeID,
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
      console.log('Error with this challenge');
    }
  };
  useEffect(() => setChallengeId(challengeID), [challengeID]);
  useEffect(() => getChallenges(), []);

  return (
    <ul className="runningwild__challenges-content-cardList">
      {challenges.length ? challenges.map((challenge) => (
        <li id={challenge.challenge_id} key={challenge.challenge_id}>
          <ChallengesCard
            title={challenge.name}
            illustration={challenge.challenge_image}
            text={challenge.description}
          />
          <div className="runningwild__challenges-content-cardList_progression">
            <button className="runningwild__challenges-content-cardList_progression-button" type="button" onClick={(e) => { onButtonClick(e); setChallengeId(challenge.challenge_id); }}>Accepter le challenge</button>
          </div>
        </li>
      )) : ''}
      {acceptedChallenges.length ? acceptedChallenges.map((challenge) => (
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
      )) : ''}
    </ul>
  );
}

export default ChallengesCardList;
