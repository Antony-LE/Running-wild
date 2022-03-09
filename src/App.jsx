/* eslint-disable no-unused-vars */
/* eslint-disable jsx-a11y/label-has-associated-control */
/* eslint-disable jsx-a11y/media-has-caption */
/* eslint-disable jsx-a11y/anchor-is-valid */
/* eslint-disable react/jsx-no-useless-fragment */
import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.css';
import Login from './Components/login/Login';
import Registration from './Components/registration/Registration';
import Homepage from './Components/homepage/Homepage';
import cardData from './data/cardData';
import ForgotPassword from './Components/forgotPassword/ForgotPassword';
import NotFound from './Components/notfound/NotFound';
import ProfileCardList from './Components/containers/profileCardList/ProfileCardList';
import TrailCardList from './Components/containers/trailCardList/TrailCardList';

function App() {
  return (
    <BrowserRouter>
      <div className="App gradient__bg">
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/inscription" element={<Registration />} />
          <Route path="/forgot-password" element={<ForgotPassword />} />
          <Route path="/profile" element={<ProfileCardList />} />
          <Route path="*" element={<NotFound />} />
          <Route path="/homepage" element={<Homepage cardData={cardData} />} />
          <Route path="/parcours" element={<TrailCardList />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
