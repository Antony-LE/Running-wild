import React from 'react';
import PropTypes from 'prop-types';
import './classementItems.css';
import ClassementItem from '../classementItem/ClassementItem';

function ClassementItems({ classementData }) {
  return (
    <>
      {classementData.map(({
        position,
        pseudo,
        rank,
        km,
        challenges,
        succes,
      }) => (
        <ClassementItem
          key={position}
          position={position}
          pseudo={pseudo}
          rank={rank}
          km={km}
          challenges={challenges}
          succes={succes}
        />
      ))}
    </>
  );
}

ClassementItems.propTypes = {
  classementData: PropTypes.arrayOf(
    PropTypes.shape({
      position: PropTypes.number.isRequired,
      pseudo: PropTypes.string.isRequired,
      rank: PropTypes.number.isRequired,
      km: PropTypes.number.isRequired,
      challenges: PropTypes.number.isRequired,
      succes: PropTypes.number.isRequired,
    }).isRequired,
  ).isRequired,
};

export default ClassementItems;
