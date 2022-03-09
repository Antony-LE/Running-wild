/* eslint-disable react/jsx-no-useless-fragment */
/* eslint-disable max-len */
/* eslint-disable no-unused-vars */
import React, { useState } from 'react';
import './trailCardList.css';
import TrailCard from '../trailCard/TrailCard';
import Navbar from '../../navbar/Navbar';
import Footer from '../../footer/Footer';

// logged in variable
const isLoggedIn = localStorage.getItem('id');

function TrailCardList() {
  return (
    <>
      {isLoggedIn ? (
        <>
          <Navbar />
          <div className="trail-card-list">
            <TrailCard />
          </div>
          <Footer />
        </>
      ) : (<div className="forbidden"> Veuillez d&apos;abord vous connecter à votre compte !</div>)}
    </>

  );
}

export default TrailCardList;
