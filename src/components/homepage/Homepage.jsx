import React from 'react';
import './homepage.css';
import HomepageCardList from '../containers/homepageCardList/HomepageCardList';
import cardData from '../../data/cardData';
import Navbar from '../navbar/Navbar';
import Footer from '../footer/Footer';
import Logout from '../logout/Logout';

function Homepage() {
  return (
    <div className="runningwild__homepage-container">
      <header className="runningwild__homepage-header">
        <Navbar />
        <Logout />
      </header>
      <main className="runningwild__homepage-main">
        <HomepageCardList cardData={cardData} />
      </main>
      <Footer />
    </div>
  );
}

export default Homepage;
