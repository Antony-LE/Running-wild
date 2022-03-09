/* eslint-disable max-len */
/* eslint-disable react/prop-types */
/* eslint-disable jsx-a11y/control-has-associated-label */
/* eslint-disable no-unused-vars */
import React, { useState } from 'react';
import './trailCard.css';

function TrailCard() {
  const [detailsOn, setDetailsOn] = useState(false);

  const handleDisplayDetails = () => {
    setDetailsOn(!detailsOn);
  };
  return (
    <div className="runningwild_trailCard">
      <div className="runningwild_trailCard-upperContainer" />
      <div className="runningwild_trailCard-lowerContainer">

        {detailsOn
          ? (
            <>
              <span />
              <span />
              <span />
              <span />
            </>
          )
          : ''}
        <button type="button" className="runningwild-trail-card-lower-container-button" onClick={handleDisplayDetails}>
          {detailsOn === false ? (<>Plus de détails</>) : (<>Moins de détails</>)}
        </button>
      </div>
    </div>
  );
}

export default TrailCard;
