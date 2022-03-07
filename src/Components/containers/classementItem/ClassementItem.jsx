import React from 'react';
import PropTypes from 'prop-types';
import './classementItem.css';

function ClassementItem({
  className,
  itemClassName,
  position,
  pseudo,
  rank,
  km,
  challenges,
  succes,
}) {
  return (
    <ul className={className}>
      <li className={itemClassName}>{position}</li>
      <li className={itemClassName}>{pseudo}</li>
      <li className={itemClassName}>{rank}</li>
      <li className={itemClassName}>{km}</li>
      <li className={itemClassName}>{challenges}</li>
      <li className={itemClassName}>{succes}</li>
    </ul>
  );
}

ClassementItem.propTypes = {
  className: PropTypes.string,
  itemClassName: PropTypes.string,
  position: PropTypes.number.isRequired,
  pseudo: PropTypes.string.isRequired,
  rank: PropTypes.number.isRequired,
  km: PropTypes.number.isRequired,
  challenges: PropTypes.number.isRequired,
  succes: PropTypes.number.isRequired,
};

ClassementItem.defaultProps = {
  className: 'runningwild__classements-items',
  itemClassName: 'runningwild__classements-item',
};

export default ClassementItem;
