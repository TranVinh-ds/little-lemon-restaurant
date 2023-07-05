import React from 'react';
import heroImg from '../icons_assets/restauranfood.jpg';

const Hero = () => {
  return (
    <section className="section-hero">
      <div className="hero-center">
        <div className="hero-title">
          <h2>little lemon</h2>
          <h4>chicago</h4>
          <p>
            We are family owned Mediterranean restaurant, focused on traditional
            recipes served with a modern twist
          </p>
          <button className="btn">reserve a table</button>
        </div>
        <div className="hero-img">
          <img src={heroImg} alt="serving food" className="img" />
        </div>
      </div>
    </section>
  );
};

export default Hero;
