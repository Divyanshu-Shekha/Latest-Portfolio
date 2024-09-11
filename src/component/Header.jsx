import React, { useState } from "react";
import "../style/header.css";
import Menubar from "../Assets/icons8-menu-bar.gif";
import { NavLink,Link } from "react-router-dom";

const Header = () => {
  const [click, setClick] = useState(true);
 

  return (
    <>
      <div className="header_wraper">
        <img
          src={Menubar}
          alt="LOGO"
          className="header_menubar"
          onClick={() => {
            click ? setClick(false) : setClick(true);
          }}
        />
        <h1>
          <Link>DIVYANSHU SHEKHAR</Link>
        </h1>
        <ul
          className={
            click ? "header_list_item" : "header_item_list_smallScreen"
          }
        >
          <li>
            <NavLink to="./"><span>HOME</span></NavLink>
          </li>
          <li>
            <NavLink to="./About"><span>ABOUT ME</span></NavLink>
          </li>
          <li>
            <NavLink to="./Education"><span>EDUCATION</span></NavLink>
          </li>
          <li>
            <NavLink to="./Experience"><span>EXPERIENCE</span></NavLink>
          </li>
          <li>
            <NavLink to="./Project"><span>PROJECT</span></NavLink>
          </li>
          <li>
            <NavLink to="./Contact"><span>CONTACT</span></NavLink>
          </li>
        </ul>
        <div className="header_first_half_top">
          <div className="header_first_half"></div>
          <div className="circle"></div>
        </div>
      </div>
    </>
  );
};

export default Header;
