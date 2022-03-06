/* eslint-disable max-len */
/* eslint-disable no-unused-vars */
import React, { useState } from 'react';
import './profileCardList.css';
import ProfileCard from '../profileCard/ProfileCard';

function ProfileCardList() {
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
      />
    </div>
  );
}

export default ProfileCardList;
