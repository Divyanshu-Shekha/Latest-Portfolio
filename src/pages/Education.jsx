import React from "react";
import "../style/education.css";

const Education = () => {
  return (
    <div>
      <div className="duration_time">2018 - 2024</div>
      <div className="education_bottom">
        <div className="education_detail">
          <h1>EDUCATION</h1>
          <div className="education_blue_line"></div>
          <p>
            <h3>Strong academic foundation in Computer Science and Engineering:</h3>
            Successfully completed a 10th diploma, followed by a Bachelor of
            Technology (B.Tech.) degree in Computer Science Engineering (CSE).
            Consistently demonstrated academic excellence, achieving 76% in
            10th, 84% in the diploma, and a CGPA of 8.57 in B.Tech. Possess a
            well-rounded understanding of core CSE concepts, including
            programming languages, algorithms, data structures, and computer
            architecture.
          </p>
        </div>
        <div className="education_and_detail">
          <h4>B.TECH</h4>
          <p>Panipat Institute Of Engineering And Technology | 2021-2024</p>
          <h4>Diploma</h4>
          <p>CDL Govr. Pollytechnic | 2018-2021</p>
          <h4>
            10<sup>th</sup>
          </h4>
          <p>ADPJ High School | 2014-2015</p>
        </div>
      </div>
    </div>
  );
};

export default Education;
