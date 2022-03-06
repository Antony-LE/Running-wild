/* eslint-disable no-unused-vars */
import React, { useState } from 'react';
import './profileCardList.css';
import ProfileCard from '../profileCard/ProfileCard';

function ProfileCardList() {
  const [name, setName] = useState('Your Name');
  const [rank, setRank] = useState(1);
  const [role, setRole] = useState(1);
  const [pseudo, setPseudo] = useState('Your Pseudo');
  const [dateOfBirth, setDateOfBirth] = useState('Your DOB');
  const [city, setCity] = useState('Your City');
  const [about, setAbout] = useState('Lorem ipsum dolor sit amet. Et perspiciatis molestias et autem ratione sed velit explicabo. Eos voluptates dolor 33 velit doloremque.');

  // Retrieve data from the localstorage and sent by profileCard page.
  // setName(localStorage.getItem('name'));
  // setRank(localStorage.getItem('rank'));
  // setRole(localStorage.getItem('role'));
  // setPseudo(localStorage.getItem('pseudo'));
  // setDateOfBirth(localStorage.getItem('date Of Birth'));
  // setCity(localStorage.getItem('city'));
  // setRole(localStorage.getItem('role'));
  // setAbout(localStorage.getItem('about'));

  return (
    <div className="profileCardList">
      <ProfileCard
        name={name}
        rank={rank}
        pseudo={pseudo}
        dateOfBirth={dateOfBirth}
        city={city}
        about={about}
      />
    </div>
  );
}

export default ProfileCardList;
