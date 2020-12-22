import React from "react";
import "./Home.css";
import Typed from "react-typed";

function Home() {
  return (
    <>
      <div className="home">
        <h1 className="main-heading">Hi, I am</h1>
        <Typed
          strings={["Wandering Eye"]}
          typeSpeed={40}
          className="hero-name"
        />
        <h2 className="sub-heading">Photographer</h2>
      </div>
      <div className="contact">
        <ul className="social-links">
          <li>
            <a href="mailto:someone@gmail.com" className="social-link">
              <i className="fas fa-envelope"></i>
            </a>
          </li>
          <li>
            <a href="#" className="social-link">
              <i className="fab fa-instagram"></i>
            </a>
          </li>
          <li>
            <a href="#" className="social-link">
              <i className="fab fa-facebook"></i>
            </a>
          </li>
        </ul>
      </div>
    </>
  );
}

export default Home;
