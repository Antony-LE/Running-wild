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

/* Use the variable id from localStorage (previsously stored in the login page)
to dynamically get the user's datas */
const USER_ID_URL = `/user/${localStorage.getItem('id')}`;

// Endpoint to retrieve user's rank
const RANK_ID_URL = `/user/${localStorage.getItem('id')}/rank`;

// Endpoint to retrieve user's ongoing challenges
const CHALLENGES_ID_URL = `/user/${localStorage.getItem('id')}/challenges`;

// Endpoint to retrieve user's ongoing achievements
const ACHIEVEMENTS_ID_URL = `/user/${localStorage.getItem('id')}/achievements`;

// logged in variable
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
  const handleRankId = async () => {
    const response = await axios.get(RANK_ID_URL);
    setRank(response.data.rank.name);
  };
  const handleChallenges = async () => {
    const response = await axios.get(CHALLENGES_ID_URL);
    if (response.data.result === true) {
      setChallenges(response.data.challenges.length);
    } else {
      setChallenges(response.data.description);
    }
  };
  const handleAchievements = async () => {
    const response = await axios.get(ACHIEVEMENTS_ID_URL);
    if (response.data.result === true) {
      setAchievements(response.data.achievments.length);
    } else {
      setAchievements(response.data.description);
    }
  };
  handleLocalStorage();
  handleRankId();
  handleChallenges();
  handleAchievements();
  return (
    <>
      {isLoggedIn ? (
        <>
          <Navbar />
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

export default ProfileCardList;
