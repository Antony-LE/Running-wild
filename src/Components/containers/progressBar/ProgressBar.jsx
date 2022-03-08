import React from 'react';
import PropTypes from 'prop-types';
import './progressBar.css';

function ProgressBar({ value, max }) {
  return (
    <div className="runningwild__progressBar-container">
      <progress value={value} max={max} />
      <p>
        {(value / max) * 100}
        %
      </p>
    </div>
  );
}

ProgressBar.propTypes = {
  value: PropTypes.string.isRequired,
  max: PropTypes.string.isRequired,
};

export default ProgressBar;
