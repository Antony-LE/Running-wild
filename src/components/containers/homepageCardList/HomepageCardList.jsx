import React from 'react';
import PropTypes from 'prop-types';
import './homepageCardList.css';
import HomepageCard from '../homepageCard/HomepageCard';

function HomepageCardList({ className, cardData }) {
  return (
    <div className={className}>
      {cardData.map(({
        title,
        illustration,
        text,
      }) => (
        <HomepageCard
          title={title}
          key={title}
          illustration={illustration}
          text={text}
        />
      ))}
    </div>
  );
}

HomepageCardList.propTypes = {
  className: PropTypes.string,
  cardData: PropTypes.arrayOf(
    PropTypes.shape({
      title: PropTypes.string.isRequired,
      text: PropTypes.string.isRequired,
      illustration: PropTypes.string.isRequired,
    }).isRequired,
  ).isRequired,
};

HomepageCardList.defaultProps = {
  className: 'runningwild__homepage-content-cardList',
};

export default HomepageCardList;
