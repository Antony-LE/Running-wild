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
    <tbody className={className}>
      <tr>
        <td className={itemClassName}>{position}</td>
        <td className={itemClassName}>{pseudo}</td>
        <td className={itemClassName}>{rank}</td>
        <td className={itemClassName}>{km}</td>
        <td className={itemClassName}>{challenges}</td>
        <td className={itemClassName}>{succes}</td>
      </tr>
    </tbody>
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
  className: 'runningwild__classements-table-items',
  itemClassName: 'runningwild__classements-table_item',
};

export default ClassementItem;
