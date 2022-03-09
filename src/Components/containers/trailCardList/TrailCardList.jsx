/* eslint-disable radix */
/* eslint-disable react/jsx-no-useless-fragment */
/* eslint-disable max-len */
/* eslint-disable no-unused-vars */
import React, { useState } from 'react';
import './trailCardList.css';
import TrailCard from '../trailCard/TrailCard';
import Navbar from '../../navbar/Navbar';
import Footer from '../../footer/Footer';

// Import of axios
import axios from '../../../api/axios';

// logged in variable
const isLoggedIn = localStorage.getItem('id');

/* Use the variable id from localStorage (previsously stored in the login page)
to dynamically get the user's datas */
const TRAIL_ID_URL = `/trail/${17}`;

function TrailCardList() {
  const [name, setName] = useState('');
  const [city, setCity] = useState('');
  const [map, setMap] = useState('');
  const [environement, setEnvironement] = useState([]);
  const [distance, setDistance] = useState('');
  const [startpoint, setStartPoint] = useState('');
  const [endpoint, setEndpoint] = useState('');
  const [postCode, setPostCode] = useState('');
  const [like, setLike] = useState(0);

  const handleTrailData = async () => {
    const response = await axios.get(TRAIL_ID_URL);
    setName(response.data.trail.name);
    setCity(response.data.trail.city);
    setMap(response.data.trail.route);
    if (response.data.trail.categoryid[0] === 1) {
      setEnvironement('Urbain');
    } else if (response.data.trail.categoryid[0] === 2) {
      setEnvironement('Forêt');
    } else if (response.data.trail.categoryid[0] === 3) {
      setEnvironement('Mer');
    } else if (response.data.trail.categoryid[0] === 4) {
      setEnvironement('Montagne');
    }
    setDistance(response.data.trail.distance);
    setStartPoint(response.data.trail.start_point);
    setEndpoint(response.data.trail.end_point);
    setPostCode(response.data.trail.postcode);
    setLike(response.data.trail.like.like);
  };
  handleTrailData();
  return (
    <>
      {isLoggedIn ? (
        <>
          <Navbar />
          <div className="trail-card-list">
            <TrailCard name={name} city={city} map={map} environement={environement} distance={distance} startPoint={startpoint} endPoint={endpoint} postalCode={postCode} like={like} />
          </div>
          <div className="recherche">
            <hr />
            <h2> Rechercher un itinéraire par : </h2>
            <button type="button" className="runningwild-trail-card-button">
              Autour de vous
            </button>
            <button type="button" className="runningwild-trail-card-button">
              Selon la distance
            </button>
          </div>
          <Footer />
        </>
      ) : (<div className="forbidden"> Veuillez d&apos;abord vous connecter à votre compte !</div>)}
    </>

  );
}

export default TrailCardList;
