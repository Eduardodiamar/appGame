import React from 'react';

const PropertyBar = ({ value, max, label }) => {
  const percentage = Math.floor((value / max) * 100);

  const barStyle = {
    width: `${percentage}%`,
  };

  let barClass = '';

  if (percentage >= 80) {
    barClass = 'property-bar-progress-green';
  } else if (percentage >= 20 && percentage < 80) {
    barClass = 'property-bar-progress-yellow';
  } else {
    barClass = 'property-bar-progress-red';
  }

  return (
    <div className="property-bar">
      <div className="property-bar-label">{label}</div>
      <div className="property-bar-container">
        <div className={`property-bar-progress ${barClass}`} style={barStyle}></div>
      </div>
    </div>
  );
};

export default PropertyBar;
