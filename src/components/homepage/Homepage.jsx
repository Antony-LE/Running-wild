import React from 'react';
import './homepage.css';
import HomepageCardList from '../containers/homepageCardList/HomepageCardList';
import cardData from '../../Data/cardData';

function Homepage() {
  return (
    <div className="runningwild__homepage-container">
      <div>ICI LA NAVBAR</div>
      <header className="runningwild__homepage-header">
        <h1 className="runningwild__homepage-header_title">Running Wild</h1>
      </header>
      <main className="runningwild__homepage-main">
        <p>Les news</p>
        <HomepageCardList cardData={cardData} />
      </main>
      <footer className="runningwild__homepage-footer">ici le footer</footer>
    </div>
  );
}

export default Homepage;
