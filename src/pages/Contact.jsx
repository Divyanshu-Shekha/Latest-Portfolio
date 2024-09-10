import React from "react";
import "../style/contact.css";
import { FiPhoneIncoming } from "react-icons/fi";
import { MdOutlineMarkEmailUnread } from "react-icons/md";
import { GrLocation } from "react-icons/gr";
import { IoLogoInstagram } from "react-icons/io5";

const Contact = () => {
  return (
    <div>
      <div className="contact_top">
        <h1>
          <span>GET</span> IN TOUCH
        </h1>
        <i>Let's Work Together</i>
      </div>
      <div className="contact_middle">
        <div className="contact_middle_child">
          <span>
            <FiPhoneIncoming
              style={{ height: "2rem", width: "2rem", color: "#11cfe2ab" }}
            />
          </span>
          <h3>Phone & Mobile</h3>
          <p>+91-966-14-888-18</p>
          <p>+91-966-14-888-18</p>
        </div>
        <div className="contact_middle_child">
          <span>
            <MdOutlineMarkEmailUnread
              style={{ height: "2rem", width: "2rem", color: "#11cfe2ab" }}
            />
          </span>
          <h3>Email & Website</h3>
          <p>divyanshushekhar20@gmail.com</p>
          <p>loading...</p>
        </div>
        <div className="contact_middle_child">
          <span>
            <GrLocation
              style={{ height: "2rem", width: "2rem", color: "#11cfe2ab" }}
            />
          </span>
          <h3>Address</h3>
          <p>Saharsa</p>
          <p>Mahishi</p>
        </div>
        <div className="contact_middle_child">
          <span>
            <IoLogoInstagram
              style={{ height: "2rem", width: "2rem", color: "#11cfe2ab" }}
            />
          </span>
          <h3>Instagram</h3>
          <p>divyanshu20</p>
        </div>
      </div>
      <div className="contact_end">
        <div className="contact_end_line_container">
          <div className="contact_end_start"></div>
          <div className="contact_end_mid"></div>
          <div className="contact_end_end"></div>
        </div>
        <h1>DIVYANSHU SHEKHAR</h1>
      </div>
    </div>
  );
};

export default Contact;
