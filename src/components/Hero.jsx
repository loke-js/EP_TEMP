import React from 'react';

const Hero = () => {
  return (
    <main>
      <div className="background-image">
            <img src='../assets/Illustration (2).png' alt="" />
      </div>
      <div className="stats">
        <section>
          <h3>Customer</h3>
          <p>5.000+</p>
        </section>
        <section>
          <h3>Delivery</h3>
          <p>8.000+</p>
        </section>
        <section>
          <h3>Ratings</h3>
          <p>1.000+</p>
        </section>
      </div>
    </main>
  );
};

export default Hero;