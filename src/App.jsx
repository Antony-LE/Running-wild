import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.css';
import Login from './Components/login/Login';
import Registration from './Components/registration/Registration';
import Homepage from './Components/homepage/Homepage';
import cardData from './data/cardData';

function App() {
  return (
    <BrowserRouter>
      <div className="App gradient__bg">
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/inscription" element={<Registration />} />
          <Route path="/homepage" element={<Homepage cardData={cardData} />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
