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
          <RiArrowRightDoubleFill style={{height:'5rem',width:'2.5rem',color:'#11cfe2ab'}}/>
          <div className="education_du_des_inner">
            <h4>company name</h4>
            <p>designation (duration)</p>
          </div>
        </div>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsa tempore
          vel ratione expedita, maxime minima. Expedita incidunt dolore magni
          porro illum laborum? Soluta, maxime cum. Rem quaerat harum facilis
          nesciunt.
        </p>
      </div>
      <div className="education_container">
        <div className="education_du_des">
          <RiArrowRightDoubleFill style={{height:'5rem',width:'2.5rem',color:'#11cfe2ab'}}/>
          <div className="education_du_des_inner">
            <h4>company name</h4>
            <p>designation (duration)</p>
          </div>
        </div>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsa tempore
          vel ratione expedita, maxime minima. Expedita incidunt dolore magni
          porro illum laborum? Soluta, maxime cum. Rem quaerat harum facilis
          nesciunt.
        </p>
      </div>
    </div>
  );
};

export default Experience;
