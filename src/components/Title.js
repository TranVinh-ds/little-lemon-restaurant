import React from 'react';

const Title = ({ title }) => {
  return (
    <div className="item-title">
      <h2>{title || 'Default title'}</h2>
      <div className="title-underline"></div>
    </div>
  );
};

export default Title;
