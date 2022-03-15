/* eslint-disable react/jsx-no-useless-fragment */
/* eslint-disable max-len */
/* eslint-disable no-unused-vars */
import React, { useState } from 'react';
import './profileCardList.css';
import ProfileCard from '../profileCard/ProfileCard';
import Navbar from '../../navbar/Navbar';
import Footer from '../../footer/Footer';
import AdminCard from '../adminCard/AdminCard';

// Import of axios
import axios from '../../../api/axios';

/* Use the variable id from localStorage (previously stored in the login page)
to dynamically get the user's datas */
const USER_ID_URL = `/user/${localStorage.getItem('id')}`;

// Endpoint to retrieve user's rank
const RANK_ID_URL = `/user/${localStorage.getItem('id')}/rank`;

// Endpoint to retrieve user's ongoing challenges
const CHALLENGES_ID_URL = `/user/${localStorage.getItem('id')}/challenges`;

// Endpoint to retrieve user's ongoing achievements
const ACHIEVEMENTS_ID_URL = `/user/${localStorage.getItem('id')}/achievements`;

// Endpoint to retrieve user's Points
const POINTS_ID_URL = `/leaderboard/${localStorage.getItem('id')}`;

// User's ID
const isLoggedIn = localStorage.getItem('id');

function ProfileCardList() {
  const [Name, setName] = useState('');
  const [rank, setRank] = useState(1);
  const [dob, setDob] = useState('');
  const [city, setCity] = useState('');
  const [pseudo, setPseudo] = useState('');
  const [role, setRole] = useState(1);
  const [avatar, setAvatar] = useState('');
  const [surname, setSurname] = useState('');
  const [email, setEmail] = useState('');
  const [subscription, setSubscription] = useState('');
  const [challenges, setChallenges] = useState('');
  const [achievements, setAchievements] = useState('');
  const [totalPoints, setTotalPoints] = useState(0);
  const [totalKm, setTotalKm] = useState(0);
  const [totalBonusPoints, setTotalBonusPoints] = useState(0);
  // Get all the user's data
  const handleLocalStorage = async () => {
    const response = await axios.get(USER_ID_URL);
    setName(response.data.user.name);
    setDob(response.data.user.dob);
    setCity(response.data.user.city);
    setPseudo(response.data.user.pseudo);
    setRole(response.data.user.role_id);
    setAvatar(response.data.user.avatar);
    setSurname(response.data.user.surname);
    setEmail(response.data.user.email);
    setSubscription(response.data.user.subscription_date);
  };

  // Get the user's rank
  const handleRankId = async () => {
    const response = await axios.get(RANK_ID_URL);
    setRank(response.data.rank.name);
  };

  // Get the user's ongoig challenges
  const handleChallenges = async () => {
    const response = await axios.get(CHALLENGES_ID_URL);
    if (response.data.challenges.subscribed_challenges !== null) {
      setChallenges(response.data.challenges.subscribed_challenges.length);
    } else {
      setChallenges('pas de challenge en cours !');
    }
  };

  // Get the user's ongoig achievements
  const handleAchievements = async () => {
    const response = await axios.get(ACHIEVEMENTS_ID_URL);
    if (response.data.result === true) {
      setAchievements(response.data.achievements.length);
    } else {
      setAchievements('pas de succès obtenus !');
    }
  };

  // Get the user's points
  const handlePoints = async () => {
    const response = await axios.get(POINTS_ID_URL);
    setTotalPoints(response.data.points.total_points);
    setTotalKm(response.data.points.total_distance_run);
    setTotalBonusPoints(response.data.points.total_bonus_points_for_completed_challenges);
  };

  // functions launching
  handleLocalStorage();
  handleRankId();
  handleChallenges();
  handleAchievements();
  handlePoints();
  return (
    <>
      {isLoggedIn ? (
        <>
          <div className="profileCardList">
            {role === 1 ? (
              <ProfileCard
                name={Name}
                rank={rank}
                pseudo={pseudo}
                dateOfBirth={dob}
                city={city}
                surname={surname}
                avatar={avatar}
                email={email}
                subscription={subscription}
                role={role}
                challenges={challenges}
                achievements={achievements}
                totalPoints={totalPoints}
                totalKm={totalKm}
                totalBonusPoints={totalBonusPoints}
              />
            ) : (
              <AdminCard
                name={Name}
                rank={rank}
                pseudo={pseudo}
                dateOfBirth={dob}
                city={city}
                surname={surname}
                avatar={avatar}
                email={email}
                subscription={subscription}
                role={role}
              />
            ) }

          </div>
          <Footer />
        </>
      ) : (<div className="forbidden"> Veuillez d&apos;abord vous connecter à votre compte !</div>)}

    </>

  );
}

export default React.memo(ProfileCardList);
