/* eslint-disable max-len */
/* eslint-disable no-unused-vars */
import React, { useState } from 'react';
import './profileCardList.css';
import ProfileCard from '../profileCard/ProfileCard';
import Navbar from '../../navbar/Navbar';
import Footer from '../../footer/Footer';

// Import of axios
import axios from '../../../api/axios';

/* Use the variable id from localStorage (previsously stored in the login page)
to dynamically get the user's datas */
const USER_ID_URL = `/user/${localStorage.getItem('id')}`;

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
  const handleLocalStorage = async () => {
    const response = await axios.get(USER_ID_URL);
    setName(response.data.user.name);
    setRank(response.data.user.rank_id);
    setDob(response.data.user.dob);
    setCity(response.data.user.city);
    setPseudo(response.data.user.pseudo);
    setRole(response.data.user.role_id);
    setAvatar(response.data.user.avatar);
    setSurname(response.data.user.surname);
    setEmail(response.data.user.email);
    setSubscription(response.data.user.subscription_date);
    console.log(response);
  };
  handleLocalStorage();
  return (
    <>
      <Navbar />
      <div className="profileCardList">
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
        />
      </div>
      <Footer />
    </>
  );
}

export default ProfileCardList;
