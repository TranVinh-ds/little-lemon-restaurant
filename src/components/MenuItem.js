import React from 'react';

const MenuItem = ({ id, title, price, img, desc }) => {
  return (
    <article className="menu-2-item">
      <img src={img} alt={title} className="menu-2-img" />
      <div className="item-info">
        <header>
          <h5 className="menu-2-title">{title}</h5>
          <span className="item-price">${price}</span>
        </header>
        <p className="item-text">{desc}</p>
      </div>
    </article>
  );
};

export default MenuItem;
