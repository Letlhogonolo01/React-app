import React from "react";
import "./SplitLayout.css";
import {
  FaBars,
  FaHome,
  FaFacebook,
  FaInstagram,
  FaYoutube,
} from "react-icons/fa";
import Design1 from "../Assets/Images/Design1.jpg";
import Kitchen from "../Assets/Images/Kitchen.jpeg";
import Bedroom from "../Assets/Images/Bedroom.jpg";
import Livingroom from "../Assets/Images/Livingroom.jpg";

const SplitLayout = () => {
  return (
    <div className="split-layout">
      <div className="left-side">
        <nav className="navbar">
          <nav>
            <a>
              <FaHome />
            </a>
            <a href="/about">ABOUT US</a>
            <a href="/portfolio">PORTFOLIO</a>
            <a href="/shop">SHOP</a>
            <a href="/contact">CONTACT</a>
          </nav>
        </nav>
        <body className="circle-img">
          <img src={Design1} alt="Design Img" />
          <div className="arrow-dots-container">
            <div className="arrow-up"></div>
            <div className="dots-container">
              <p className="number">01</p>
              <div className="dot"></div>
              <div className="dot"></div>
              <div className="dot"></div>
              <div className="dot"></div>
              <div className="dot"></div>
              <p className="number">06</p>
            </div>
            <div className="arrow-down"></div>
          </div>
        </body>
      </div>
      <div className="right-side">
        <nav className="navbar1">
          <nav>
            <button className="button">
              Lets make your
              <br /> home beautiful
            </button>
            <a>
              <FaBars />
            </a>
          </nav>
        </nav>

        <body>
          <div className="design">
            <p>
              INTERIOR
              <br /> DESIGN{" "}
            </p>
          </div>
          <div className="circle-container">
            <div className="image-item">
              <img src={Kitchen} alt="" />
              <p>Kitchen</p>
            </div>
            <div className="image-item">
              <img src={Bedroom} alt="" />
              <p>Bedroom</p>
            </div>
            <div className="image-item">
              <img src={Livingroom} alt="" />
              <p>Livingroom</p>
            </div>
          </div>
          <button className="btn">CREATE A PRODUCT</button>
        </body>

        <footer>
          <div className="socials">
            <FaFacebook className="icons facebook" />
            <FaInstagram className="icons instagram" />
            <FaYoutube className="icons youtube" />
          </div>
        </footer>
      </div>
    </div>
  );
};

export default SplitLayout;
