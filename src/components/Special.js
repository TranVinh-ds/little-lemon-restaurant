import React from 'react';
import { FaCartPlus } from 'react-icons/fa';
import bruchetta from '../icons_assets/bruchetta.jpg';
import greekSalad from '../icons_assets/greek salad.jpg';
import lemonDessert from '../icons_assets/lemon dessert.jpg';
import { useNavigate } from 'react-router-dom';

const Special = () => {
  const navigate = useNavigate();
  const loginToggler = () => {
    navigate('/login');
  };
  return (
    <section className="section-center special-center">
      <div className="special-title">
        <h2>this weeks specials!</h2>
        <button className="special-btn" onClick={loginToggler}>
          online menu
        </button>
      </div>
      <div className="special-container">
        <article className="special-card">
          <img src={greekSalad} alt="greek salad" className="special-img" />
          <div className="menu-title">
            <h3>greek salad</h3>
            <span>$12.99</span>
          </div>
          <p>
            The famous greek salad of crispy lettuce, peppers, olives and our
            Chicago style teta cheese, garnished with crunchy garlic rosemary
            croutons.
          </p>
          <div className="menu-delivery">
            <h4>order to delivery</h4>
            <span>
              <FaCartPlus />
            </span>
          </div>
        </article>
        <article className="special-card">
          <img
            src={bruchetta}
            alt="greek salad"
            className="special-img special-img-2"
          />
          <div className="menu-title">
            <h3>Bruchetta</h3>
            <span>$15.99</span>
          </div>
          <p>
            Our Bruchetta is made from grilled bread that has been smeared with
            garlic and seasoned with salt and olive oil.
          </p>
          <div className="menu-delivery">
            <h4>order to delivery</h4>
            <span>
              <FaCartPlus />
            </span>
          </div>
        </article>
        <article className="special-card">
          <img src={lemonDessert} alt="greek salad" className="special-img" />
          <div className="menu-title">
            <h3>lemon dessert</h3>
            <span>$8.99</span>
          </div>
          <p>
            This comes straight from grandma's recipe book, every last
            ingredient has been sourced and is as authentic as can be imagined.
          </p>
          <div className="menu-delivery">
            <h4>order to delivery</h4>
            <span>
              <FaCartPlus />
            </span>
          </div>
        </article>
      </div>
    </section>
  );
};

export default Special;
