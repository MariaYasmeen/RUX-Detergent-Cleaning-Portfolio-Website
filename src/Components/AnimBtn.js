import React from 'react';
import './AnimBtn.css'; 

const AnimBtn = ({ buttonName, path }) => {
  return (
    <div className="container">
      <a href={path} className="button type--A">
        <div className="button__line"></div>
        <div className="button__line"></div>
        <span className="button__text">{buttonName}</span>
        <div className="button__drow1"></div>
        <div className="button__drow2"></div>
      </a>
    </div>
  );
};

export default AnimBtn;