import React from "react";
import "./About.css";
import { Link } from "react-router-dom";

function About() {
  return (
    <div className="about">
      <img
        className="about-img"
        src="https://www.gstatic.com/tv/thumb/persons/487130/487130_v9_bb.jpg"
        alt=""
      />
      <div className="about-info">
        <h1 className="about-hero">Wandering eye</h1>
        <p className="about-text">
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Temporibus
          ipsam repellat magnam saepe, hic dolorum voluptatibus delectus
          voluptatum commodi laborum amet, nobis facere vel nulla ad quisquam
          voluptas natus dignissimos tenetur! Laudantium est recusandae eius ut
          a nobis, perferendis neque quo, dolor assumenda quibusdam eum ipsam
          iure doloribus, nam soluta.
        </p>
        <Link className="about-link" to="/works">
          My Works
        </Link>
      </div>
    </div>
  );
}

export default About;
