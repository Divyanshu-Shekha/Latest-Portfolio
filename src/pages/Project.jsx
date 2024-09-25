import React from "react";
import "../style/project.css";
import project from "../datas/index";
import { Link } from "react-router-dom";

const Project = () => {
  return (
    <div>
      <div className="Project_detail">
        <h1>PORJECT'S</h1>
        <div className="project_blue_line"></div>
      </div>
      <div className="Project_container">
        {project.map((val, index) => {
          return (
            <div className="Project_container_card">
              <div className="Project_image">
                <img src={val.imgUrl} alt="Project" key={index} />
              </div>
              <h3 key={index}>{val.projectName} | 2023</h3>
              <p key={index}>{val.projectDesc}</p>
              <Link to={val.projectLink} target="blank"><span>Go To Project</span></Link>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Project;
