import React from 'react';
import testimonials from '../data';

const CustomerSay = () => {
  return (
    <section className=" say-top">
      <div className="say-center">
        <div className="say-title">
          <h1>testimonials</h1>
        </div>
        <div className="say-container">
          {testimonials.map((comment) => {
            const { id, rating, image, name, review } = comment;
            return (
              <article className="say-card" key={id}>
                <h3>rating: {rating}</h3>
                <img src={image} alt={name} className="say-img" />
                <h4>name: {name}</h4>
                <p>
                  <span>review:</span> {review}
                </p>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default CustomerSay;
