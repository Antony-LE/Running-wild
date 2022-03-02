import React from 'react';
import './homepage.css';
import HomepageCardList from '../containers/homepageCardList/HomepageCardList';
import cardData from '../../data/cardData';
import Navbar from '../navbar/Navbar';
import Footer from '../Footer/Footer';

function Homepage() {
  return (
    <div className="runningwild__homepage-container">
      <Navbar />
      <header className="runningwild__homepage-header">
        <h1 className="runningwild__homepage-header_title">Running Wild</h1>
      </header>
      <main className="runningwild__homepage-main">
        <p>Les news</p>
        <HomepageCardList cardData={cardData} />
      </main>
      <Footer />
    </div>
  );
}

export default Homepage;
