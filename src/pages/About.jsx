import React from "react";
import "../style/about.css";

const About = () => {
  return (
    <>
      <div className="AboutContainer">
        <div className="ImageContainer">
          <img src="" alt="developer"/>
        </div>
        <div className="Detail_Container">
          <h1>MY BIOGRAPHY</h1>
          <div className="blue_line"></div>
          <p>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quas
            nesciunt quia obcaecati. Cumque deserunt sequi pariatur voluptates
            nesciunt exercitationem, enim quidem repellat impedit? Molestias
            amet ducimus debitis pariatur, perspiciatis quae!
          </p>
          <p>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quas
            nesciunt quia obcaecati. Cumque deserunt sequi pariatur voluptates
            nesciunt exercitationem, enim quidem repellat impedit? Molestias
            amet ducimus debitis pariatur, perspiciatis quae!
          </p>
          <h3>Skill & Intrest</h3>
          <div className="skillContainer">
           <div>Html</div>
           <div>CSS</div>
           <div>JavaScript</div>
           <div>React js</div>
           <div>Node js</div>
           <div>Express js</div>
           <div>Mongo DB</div>
          </div>
        </div>
      </div>
    </>
  );
};

export default About;
