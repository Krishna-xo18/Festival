import React from "react";
import "./Home.css";

function Home() {
  return (
    <div className="home">
      <h1>Welcome to Virtual India</h1>
      <p>
        Explore the vibrant festivals and magnificent monuments of India! Dive
        into the rich heritage and traditions that have been passed down through
        generations.
      </p>
      <img
        src="/images/hero-image.jpg"
        alt="Indian Heritage"
        className="home-image"
      />
      <button className="explore-btn">Explore Now</button>
    </div>
  );
}

export default Home;
