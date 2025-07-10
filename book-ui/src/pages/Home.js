import React from 'react';
import sampleImg from '../assets/bookcover.jpg';

function Home() {
  return (
    <div
      className="home-container"
      style={{
        backgroundImage: `url(${sampleImg})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        height: '100vh',
        color: 'white',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        textAlign: 'center',
        padding: '0 20px'
      }}
    >
      <div className="hero-tagline">✨ Discover • Read • Explore ✨</div>
      <h1 className="hero-title">
        Your Ultimate <span className="highlight">Reading</span> Experience
      </h1>
      <p className="hero-subtitle">
        Discover books based on your mood, search your favorite genres,
        and explore top-rated content all in one place.
      </p>
    </div>
  );
}

export default Home;
