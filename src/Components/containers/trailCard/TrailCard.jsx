/* eslint-disable jsx-a11y/iframe-has-title */
/* eslint-disable max-len */
/* eslint-disable react/prop-types */
/* eslint-disable jsx-a11y/control-has-associated-label */
/* eslint-disable no-unused-vars */
import React, { useState } from 'react';
import './trailCard.css';

function TrailCard({
  name, city, map, environement, distance, startPoint, endPoint, postalCode, like,
}) {
  const [detailsOn, setDetailsOn] = useState(false);

  const handleDisplayDetails = () => {
    setDetailsOn(!detailsOn);
  };
  return (
    <div className="runningwild_trailCard">
      <div className="runningwild_trailCard-upperContainer">
        {name}
      </div>
      <div className="runningwild_trailCard-imageContainer">
        <iframe src={map} />
      </div>
      <div className="runningwild_trailCard-lowerContainer">
        <span>
          Type d&apos;environnement :
          {' '}
          {environement}
          {' '}
        </span>
        <span>
          Distance :
          {' '}
          {`${distance}km`}
          {' '}
        </span>
        <span>
          Ville :
          {' '}
          {city}
          {' '}
        </span>
        <span>
          Point de départ :
          {' '}
          {startPoint}
          {' '}
        </span>

        {detailsOn
          ? (
            <>
              <hr />
              <span>
                Point d&apos;arrivée :
                {' '}
                {endPoint}
                {' '}
              </span>
              <span>
                Code postal :
                {' '}
                {postalCode}
                {' '}
              </span>
              <span>
                Nombre de likes :
                {' '}
                {`${like}❤️`}
                {' '}
              </span>
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
