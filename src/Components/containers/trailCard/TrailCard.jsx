/* eslint-disable object-shorthand */
/* eslint-disable jsx-a11y/iframe-has-title */
/* eslint-disable max-len */
/* eslint-disable react/prop-types */
/* eslint-disable jsx-a11y/control-has-associated-label */
/* eslint-disable no-unused-vars */
import React, { useState } from 'react';
import './trailCard.css';

// Import of axios
import axios from '../../../api/axios';

// endpoint for Likes URL
const LIKE_URL = '/review';

// endpoint to subscribe to a new run
const RUN_URL = '/run';

// variables to get the current time
const t = new Date();
const hours = `${t.getHours()}:${t.getMinutes()}`;

function TrailCard({
  name, city, map, environement, distance, startPoint, endPoint, postalCode, like,
}) {
  // Handle the LIKE BUTTON
  // display the button like style
  const [likeOn, setLikeOn] = useState(false);
  // Check if the user has already liked the trail or not
  const [likeDisplay, setLikeDisplay] = useState(false);

  // Handle the SUBSCRIPTION BUTTON
  // display the button subscription style
  const [subscriptionOn, setSubscriptionOn] = useState(false);
  const [time, setTime] = useState('');
  const [hour, setHour] = useState('');
  const [Km, setKm] = useState(0);

  const [userId, setUserId] = useState(0);
  const [trailId, setTrailId] = useState(0);
  const [detailsOn, setDetailsOn] = useState(false);

  const handleDisplayDetails = () => {
    setDetailsOn(!detailsOn);
  };

  const handleLikeOn = async (e) => {
    setUserId(localStorage.getItem('id'));
    setTrailId(localStorage.getItem('trail_Id'));
    setLikeOn(!likeOn);
    try {
      const response = await axios.post(
        LIKE_URL,
        JSON.stringify({
          userId: userId,
          trailId: trailId,
        }),
        {
          headers: {
            'Content-Type': 'application/json',
            'Access-Control-Allow-Origin': '*',
          },

        },
      );
      if (response.data.result === true) {
        setLikeDisplay(true);
      } else {
        setLikeDisplay(false);
      }
    } catch (err) {
      console.log(err);
    }
  };

  const handleSubscription = async (e) => {
    setUserId(localStorage.getItem('id'));
    setTrailId(localStorage.getItem('trail_Id'));
    setTime('01:30:50');
    setHour(hours);
    setKm(localStorage.getItem('distance'));
    setSubscriptionOn(!subscriptionOn);
    try {
      const response = await axios.post(
        RUN_URL,
        JSON.stringify({
          userId: userId,
          trailId: trailId,
          time: time,
          hour: hour,
          distance: Km,
        }),
        {
          headers: {
            'Content-Type': 'application/json',
            'Access-Control-Allow-Origin': '*',
          },

        },
      );
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <div className="runningwild_trailCard">
      <div className="runningwild_trailCard-upperContainer">
        {name}
      </div>
      <div className="runningwild_trailCard-imageContainer">
        <iframe src={map} />
      </div>
      <div className="runningwild_trailCard-lowerContainer">
        <span>
          Type d&apos;environnement :
          {' '}
          {environement}
          {' '}
        </span>
        <span>
          Distance :
          {' '}
          {`${distance}km`}
          {' '}
        </span>
        <span>
          Ville :
          {' '}
          {city}
          {' '}
        </span>
        <span className="startpoint">
          Point de départ :
          {' '}
          {startPoint}
          {' '}
        </span>

        {detailsOn
          ? (
            <>
              <hr />
              <span className="endpoint">
                Point d&apos;arrivée :
                {' '}
                {endPoint}
                {' '}
              </span>
              <span>
                Code postal :
                {' '}
                {postalCode}
                {' '}
              </span>
              <span>
                Nombre de likes :
                {' '}
                {`${like} ❤️`}
                {' '}
              </span>
            </>
          )
          : ''}
        <button type="button" className="runningwild-trail-card-lower-container-buttonDetails" onClick={handleDisplayDetails}>
          {detailsOn === false ? (<>détails</>) : (<>Moins de détails</>)}
        </button>
        <button type="button" className="runningwild-trail-card-lower-container-buttonLike" onClick={handleLikeOn}>
          {likeOn === false && likeDisplay === false ? (<>Like</>) : (<>Liked !</>)}
        </button>
        <button type="button" className="runningwild-trail-card-lower-container-subscribtion" onClick={handleSubscription}>
          {subscriptionOn === true ? (<>Inscris !</>) : (<>Je m&apos;inscris</>)}
        </button>
      </div>
    </div>
  );
}

export default TrailCard;
