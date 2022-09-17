import React, { useEffect, useRef } from "react";
import { Link } from "react-router-dom";

import "../../styles/home.css";

import { AboutUs } from "../component/about-us";

import video from "-!file-loader!../../img/tattoo-bg.mp4";

export const Home = () => {
  const videoEl = useRef(video);

  useEffect(() => {
    videoEl.current.play();
  }, []);

  return (
    <>
      <div className="home-main">
        <video
          id="video"
          playsInline
          loop
          muted
          alt="All the devices"
          src={video}
          ref={videoEl}
        />
        <div className="home-content">
          <h1>Ink Zone</h1>
          <p>Find the perfect tattoo</p>
          <div>
            <Link to="/styles" className="home-btn">
              Styles
            </Link>
            <Link to="/sign-up" className="home-btn home-btn-light">
              Sign Up
            </Link>
          </div>
        </div>
      </div>
      <div className="about-container">
        <AboutUs />
      </div>
    </>
  );
};
