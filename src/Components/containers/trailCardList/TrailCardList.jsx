/* eslint-disable no-alert */
/* eslint-disable jsx-a11y/label-has-associated-control */
/* eslint-disable radix */
/* eslint-disable react/jsx-no-useless-fragment */
/* eslint-disable max-len */
/* eslint-disable no-unused-vars */
import React, { useState, useEffect } from 'react';
import './trailCardList.css';
import Swal from 'sweetalert2';
import TrailCard from '../trailCard/TrailCard';
import Navbar from '../../navbar/Navbar';
import Footer from '../../footer/Footer';

// Import of axios
import axios from '../../../api/axios';

// logged in variable
const isLoggedIn = localStorage.getItem('id');

// Array of random id from the same city (dynamic trail suggestion not ready yet !)
// TODO store the user's city into localstorage when login

const parisTrails = [2, 17, 18];
const random = Math.floor(Math.random() * parisTrails.length);
const randomValue = parisTrails[random];

// Set the trail ID on localstorage
localStorage.setItem('trail_Id', randomValue);

// endpoint for random trail
const TRAIL_ID_URL = `/trail/${randomValue}`;

// endpoint to subscribe to a new run
const RUN_URL = '/run';

// variables to get the current time
const t = new Date();
const hours = `${t.getHours()}:${(t.getMinutes() < 10 ? '0' : '') + t.getMinutes()}`;

function TrailCardList() {
  const [name, setName] = useState('');
  const [city, setCity] = useState('');
  const [map, setMap] = useState('');
  const [environement, setEnvironement] = useState([]);
  const [distance, setDistance] = useState('');
  // Set the trail distance on localstorage (use in trailCard component)
  localStorage.setItem('distance', distance);
  const [startpoint, setStartPoint] = useState('');
  const [endpoint, setEndpoint] = useState('');
  const [postCode, setPostCode] = useState('');
  const [like, setLike] = useState(0);

  // Handle the SUBSCRIPTION BUTTON
  // display the button subscription style
  const [subscriptionOn, setSubscriptionOn] = useState(false);
  const [userId, setUserId] = useState(0);
  const [trailId, setTrailId] = useState(0);
  const [time, setTime] = useState('');
  const [hour, setHour] = useState('');
  const [Km, setKm] = useState(0);

  // Handle datas for search form
  const [searchedCity, setSearchedCity] = useState('');
  // const [distanceMax, setDistanceMax] = useState(0);
  const [distanceMin, setDistanceMin] = useState('');
  const [searchedResults, setSearchedResults] = useState('');
  const [displayResults, setDisplayResults] = useState(false);
  const [errorMessage, setErrorMessage] = useState(false);
  const [displayResultError, setDisplayResultsError] = useState(false);

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
    // Store the trail distance into the browser's localStorage (Used in the profil card)
    localStorage.setItem('trail_distance', (response.data.trail.distance));
    setStartPoint(response.data.trail.start_point);
    setEndpoint(response.data.trail.end_point);
    setPostCode(response.data.trail.postcode);
    setLike(response.data.trail.like.like);
  };
  handleTrailData();
  function handleReload() {
    window.location.reload();
  }

  const handleSearchData = async (e) => {
    e.preventDefault();
    // endpoint for random trail
    const SEARCH_TRAIL_URL = `/trail/search?city=${searchedCity}&distanceMin=${distanceMin}`;
    const response = await axios.get(SEARCH_TRAIL_URL);
    if (response.data.result === true) {
      setSearchedResults(response.data.searched);
      setDisplayResults(!displayResults);
      setErrorMessage(false);
      console.log(searchedResults);
    } else if (response.data.result === false) {
      setDisplayResultsError('Aucuns résultats');
      setErrorMessage(!errorMessage);
      setDisplayResults(false);
    } else {
      setErrorMessage(!errorMessage);
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
          userId,
          trailId,
          time,
          hour,
          distance: Km,
        }),
        {
          headers: {
            'Content-Type': 'application/json',
            'Access-Control-Allow-Origin': '*',
          },

        },
      );
      Swal.fire(
        'Good job!',
        `Vous avez terminé ce parcours en ${time} seconde`,
        'success',
      );
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <>
      <div className="runningwild__parcours-content-cardList">
        <div className="runningwild__parcours-content-card">
          <TrailCard name={name} city={city} map={map} environement={environement} distance={distance} startPoint={startpoint} endPoint={endpoint} postalCode={postCode} like={like} />
        </div>
        <div className="runningwild__parcours-content-form">
          <hr />
          {errorMessage ? (
            <>
              <h2> Rechercher un itinéraire par: </h2>
              <span className="errorMessage">{displayResultError}</span>
            </>
          ) : (
            <h2> Rechercher un itinéraire par : </h2>
          )}
          <div className="reload">
            <button type="button" onClick={handleReload}>
              Suggestion suivante
            </button>
          </div>
          <form>
            {/* ********************************City input******************************* */}
            <label
              className="runningwild__login-form-label"
              htmlFor="city"
            />
            <input
              type="text"
              placeholder="Ville"
              className="runningwild__login-form-input"
              id="city"
              autoComplete="off"
              onChange={(e) => setSearchedCity(e.target.value)}
              value={searchedCity}
              required
            />
            {/* ********************************MinDistance input******************************* */}
            <label
              className="runningwild__login-form-label"
              htmlFor="min-distance"
            />
            <input
              type="text"
              placeholder="Distance Min.(KM)"
              className="runningwild__login-form-input"
              id="min-distance"
              onChange={(e) => setDistanceMin(e.target.value)}
              value={distanceMin}
              required
            />
          </form>
          <button
            onClick={handleSearchData}
            className="runningwild__search-form-button"
            type="submit"
            value="Submit"
          >
            Rechercher !
          </button>
          <hr />
          {displayResults ? (
            <div className="runningwild__parcours-content-results">
              <h2> Résultats de votre recherche : </h2>
              { searchedResults.map((searchResult) => (
                <>
                  <span>
                    Nom :
                    {' '}
                    {searchResult.name}
                    {' '}
                  </span>
                  <br />
                  <span>
                    Environnement :
                    {' '}
                    {searchResult.categoryid}
                    {' '}
                  </span>
                  <br />
                  <span>
                    Distance :
                    {' '}
                    {`${searchResult.distance} km`}
                    {' '}
                  </span>
                  <br />
                  <span>
                    Ville :
                    {' '}
                    {searchResult.city}
                    {' '}
                  </span>
                  <br />
                  <span>
                    Adresse de départ :
                    {' '}
                    {searchResult.start_point}
                    {' '}
                  </span>
                  <br />
                  <span>
                    Adresse d&apos;arrivée :
                    {' '}
                    {searchResult.end_point}
                    {' '}
                  </span>
                  <br />
                  <span>
                    Code Postal :
                    {' '}
                    {searchResult.postcode}
                    {' '}
                  </span>
                  <br />
                  <span />
                  <button type="button" className="runningwild__parcours-content-cardList_subscribtion" onClick={handleSubscription}>
                    {subscriptionOn === true ? (<>Inscris !</>) : (<>Je m&apos;inscris</>)}
                  </button>
                  <hr />
                </>
              ))}
            </div>
          ) : ('')}
        </div>
      </div>
    </>
  );
}

export default TrailCardList;
