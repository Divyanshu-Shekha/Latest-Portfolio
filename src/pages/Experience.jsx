import React from "react";
import { RiArrowRightDoubleFill } from "react-icons/ri";
import "../style/experience.css";

const Experience = () => {
  return (
    <div>
      <div className="experience_detail">
        <h1>EXPERIENCE</h1>
        <div className="experience_blue_line"></div>
      </div>
      <div className="education_container">
        <div className="education_du_des">
          <RiArrowRightDoubleFill
            style={{ height: "5rem", width: "2.5rem", color: "#11cfe2ab" }}
          />
          <div className="education_du_des_inner">
            <h4>Solitaire Infosys</h4>
            <p>Python Developer </p>
          </div>
        </div>
        <p>
          Developed a Snake game using Python and Tkinter, implementing %100 GUI
          functionality. Created a dynamic game loop with real-time updates,
          handling collision detection and score tracking. Utilized canvas for
          rendering graphics and implemented keyboard controls for player
          movement. Achieved smooth performance and user interaction with fewer
          than 200 lines of code.
        </p>
      </div>
      <div className="education_container">
        <div className="education_du_des">
          <RiArrowRightDoubleFill
            style={{ height: "5rem", width: "2.5rem", color: "#11cfe2ab" }}
          />
          <div className="education_du_des_inner">
            <h4>PIET</h4>
            <p>MERN stack developer (45 days)</p>
          </div>
        </div>
        <p>
          Acquired comprehensive knowledge of the MERN stack (MongoDB,
          Express.js, React, Node.js). Developed a functional waste management
          system web application using the MERN stack. Demonstrated proficiency
          in full-stack development and ability to build real-world
          applications.
        </p>
      </div>
    </div>
  );
};

export default Experience;
