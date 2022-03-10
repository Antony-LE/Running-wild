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
  points,
  avatar,
}) {
  return (
    <ul className={className}>
      <li className={itemClassName}>{position}</li>
      <li className={itemClassName}>{pseudo}</li>
      <li className={itemClassName}><img src={avatar} alt="avatar of user" /></li>
      <li className={itemClassName}>{rank}</li>
      <li className={itemClassName}>{km}</li>
      <li className={itemClassName}>{points}</li>
    </ul>
  );
}

ClassementItem.propTypes = {
  className: PropTypes.string,
  itemClassName: PropTypes.string,
  position: PropTypes.string.isRequired,
  pseudo: PropTypes.string.isRequired,
  rank: PropTypes.string.isRequired,
  km: PropTypes.string.isRequired,
  points: PropTypes.number.isRequired,
  avatar: PropTypes.string.isRequired,
};

ClassementItem.defaultProps = {
  className: 'runningwild__classements-items',
  itemClassName: 'runningwild__classements-item',
};

export default ClassementItem;
