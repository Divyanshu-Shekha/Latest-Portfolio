import React from "react";
import "../style/Home.css";
import profilepic from "../Assets/profile_pic.jpg";

const Home = () => {
  return (
    <>
      <div className="Home_main">
        <div className="Home_main_top_left">
          <i>Hello!..</i>
          <h1>
            I'm Divyanshu
            <br /> Shekhar
          </h1>
          <h2>
            <i>I Am A Full (MERN) Stack Developer...</i>
          </h2>
          <p>
            I am a skilled Full Stack Web Developer with extensive experience in
            the MERN stack—MongoDB, Express.js, React.js, and Node.js. I excel
            in creating seamless, user-friendly applications by combining
            efficient database management, robust server-side solutions, and
            dynamic front-end interfaces. My focus is on delivering
            high-quality, maintainable code and innovative solutions that drive
            project success.
          </p>
        </div>
        <div className="imageContainer">
          <img src={profilepic} alt="profile pic" />
        </div>
      </div>
     
    </>
  );
};

export default Home;
