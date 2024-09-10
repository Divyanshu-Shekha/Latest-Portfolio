import React from "react";
import "../style/project.css";
import project from "../datas/index";

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
              <h3 key={index}>{val.projectName} | year</h3>
              <p key={index}>{val.projectDesc}</p>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Project;
