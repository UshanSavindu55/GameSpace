import React from 'react'
import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';


const Hero = () => {

  const wallpapers = [
  '/callofduty.jpg',
  '/cyberpunk.jpg',
  '/gtavi.jpg',
  '/spider-man.jpeg',
  '/valorant.jpg'
];

const [current, setCurrent] = useState(0);

useEffect(() => {
  const interval = setInterval(() => {
    setCurrent((prev) => (prev + 1) % wallpapers.length);
  }, 5000); // every 5 seconds
  return () => clearInterval(interval);
}, []);

  return (
    <section className="hero-section">
      <div key={current} className="hero-image-frame animate-slidein" style={{ backgroundImage: `url(${wallpapers[current]})` }}></div>

      <div className="hero-content mt-6 max-w-xl mx-auto text-center">
        <h1 className="hero-paragraph">
          <span className="text-gradient">Gaming </span>made simple — discover and play.
        </h1>
        <Link to="/get-started">
          <button className="btn-primary">Get Started</button>
        </Link>
      </div>
    </section>
  )
}

export default Hero