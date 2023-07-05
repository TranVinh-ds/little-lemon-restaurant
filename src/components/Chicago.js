import React from 'react';
import chicagoImg1 from '../icons_assets/Mario and Adrian A.jpg';
import chicagoImg2 from '../icons_assets/Mario and Adrian b.jpg';

const Chicago = () => {
  return (
    <section className="section-center chicago-center">
      <div className="chicago-container">
        <div className="chicago-title">
          <h2>little lemon</h2>
          <h4>chicago</h4>
          <p>
            We are family owned Mediterranean restaurant, focused on traditional
            recipes served with a modern twist
          </p>
        </div>
        <div className="chicago-img">
          <img
            src={chicagoImg1}
            alt="chef in kitchen"
            className="chef-1 chef-img"
          />
          <img
            src={chicagoImg2}
            alt="chef in kitchen"
            className="chef-2 chef-img"
          />
        </div>
      </div>
    </section>
  );
};

export default Chicago;
