import React from 'react';
import PropTypes from 'prop-types';
import './progressBar.css';

function ProgressBar({ value }) {
  return (
    <div className="runningwild__progressBar-container">
      <progress value={value} />
      <p>
        {Math.round(value * 100) }
        %
      </p>
    </div>
  );
}

ProgressBar.propTypes = {
  value: PropTypes.string.isRequired,
};

export default ProgressBar;
