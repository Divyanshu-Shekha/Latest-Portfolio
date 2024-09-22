import React from "react";
import "../style/about.css";
import my_image from "../Assets/image.png";

const About = () => {
  return (
    <>
      <div className="AboutContainer">
        <div className="ImageContainer">
          <img src={my_image} alt="developer" />
        </div>
        <div className="Detail_Container">
          <h1>Biography of Divyanshu Shekhar</h1>
          <div className="blue_line"></div>
          <p>
            Divyanshu Shekhar, born on September 5, 2000, in Saharsa, Bihar, is
            an aspiring tech enthusiast currently based in Delhi. With a passion
            for technology and a drive for perfection, he is forging his career
            as a full-stack developer, currently interning at Ducat. His journey
            in the tech world began early, and over the years, he has developed
            expertise across both backend and frontend development, coupled with
            strong leadership skills.
          </p>
          <p>
            Divyanshu pursued his B.Tech from the Panipat Institute of
            Engineering and Technology, following a diploma from CDL Govt.
            Polytechnic. His educational journey is marked by continuous growth,
            as reflected in his three significant certifications: a PHP
            internship, a Python internship, and a specialization in MERN stack
            development from PIET. He thrives in competitive environments,
            demonstrated by his achievement in a hackathon where he was awarded
            for maintaining his position.
          </p>
          <p>
            Dedicated to mastering new technologies, Divyanshu is always eager
            to expand his skill set. He believes in delivering work with
            precision, following the principle that only perfection is
            acceptable. As he looks to the future, his goal is clear: to secure
            a leadership role where he can guide a team and shape innovative
            tech solutions.
          </p>
          <p>
            With his blend of technical skills, a keen eye for detail, and a
            passion for excellence, Divyanshu is on a promising path toward
            becoming a leader in the tech industry.
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
            <div>C++</div>
            <div>Taildwind</div>
            <div>Redux js</div>
          </div>
        </div>
      </div>
    </>
  );
};

export default About;
