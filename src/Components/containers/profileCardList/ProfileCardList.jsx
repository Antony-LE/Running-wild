/* eslint-disable max-len */
/* eslint-disable no-unused-vars */
import React, { useState } from 'react';
import './profileCardList.css';
import ProfileCard from '../profileCard/ProfileCard';

// Import of axios
import axios from '../../../api/axios';

/* Use the variable id from localStorage (previsously stored in the login page)
to dynamically get the user's datas */
const USER_ID_URL = `/user/${localStorage.getItem('id')}`;

function ProfileCardList() {
  const handleLocalStorage = async () => {
    const responses = await axios.get(USER_ID_URL);
    localStorage.setItem('name', JSON.stringify(responses.data.user.name));
    localStorage.setItem('rank', JSON.stringify(responses.data.user.rank_id));
    localStorage.setItem('date Of Birth', JSON.stringify(responses.data.user.dob));
    localStorage.setItem('city', JSON.stringify(responses.data.user.city));
    localStorage.setItem('pseudo', JSON.stringify(responses.data.user.pseudo));
    localStorage.setItem('about', JSON.stringify(responses.data.user.about));
    localStorage.setItem('role', JSON.stringify(responses.data.user.role_id));
    localStorage.setItem('avatar', JSON.stringify(responses.data.user.avatar));
    localStorage.setItem('surname', JSON.stringify(responses.data.user.surname));
    localStorage.setItem('email', JSON.stringify(responses.data.user.email));
    localStorage.setItem('subscription_date', JSON.stringify(responses.data.user.subscription_date));
    console.log(responses);
  };
  handleLocalStorage();
  return (
    <div className="profileCardList">
      <ProfileCard
        name={localStorage.getItem('name')}
        rank={localStorage.getItem('rank')}
        pseudo={localStorage.getItem('pseudo')}
        dateOfBirth={localStorage.getItem('date Of Birth')}
        city={localStorage.getItem('city')}
        about={localStorage.getItem('about')}
        surname={localStorage.getItem('surname')}
        avatar={localStorage.getItem('avatar')}
        email={localStorage.getItem('email')}
        subscription={localStorage.getItem('subscription_date')}
      />
    </div>
  );
}

export default ProfileCardList;
