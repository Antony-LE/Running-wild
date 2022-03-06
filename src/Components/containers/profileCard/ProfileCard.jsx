/* eslint-disable no-unused-vars */
import React, { useState } from 'react';
import './profileCard.css';

function ProfileCard() {
  const [name, setName] = useState('Your Name');
  const [rank, setRank] = useState(0);
  const [pseudo, setPseudo] = useState('Your Pseudo');
  const [dateOfBirth, setDateOfBirth] = useState('Your DOB');
  const [city, setCity] = useState('Your City');
  const [about, setAbout] = useState('Lorem ipsum dolor sit amet. Et perspiciatis molestias et autem ratione sed velit explicabo. Eos voluptates dolor 33 velit doloremque aut dignissimos culpa hic molestias repellat qui nihil veritatis sit galisum corrupti nam placeat voluptatem.');

  return (
    <div className="runningwild_profileCard">
      <div className="runningwild_profileCard-upperContainer">
        <div className="runningwild_profileCard-imageContainer">
          <img src="" alt="" height="100px" width="100px" />
        </div>
      </div>
      <div className="runningwild_profileCard-lowerContainer">
        <h3>
          Your name :
          {' '}
          {name}
          , Your rank :
          {' '}
          {rank}
          , Your DOB :
          {' '}
          {dateOfBirth}
          , Your city :
          {' '}
          {city}
          {' '}
        </h3>
        <h4>
          {' '}
          Your Pseudo :
          {' '}
          {pseudo}
        </h4>
        <p>{about}</p>
      </div>
    </div>
  );
}

export default ProfileCard;
