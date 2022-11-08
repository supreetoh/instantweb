import { Typography } from "@mui/material";
import React from "react";
import { Link } from "react-router-dom";
import { BsYoutube, BsInstagram, BsLinkedin } from "react-icons/bs";
import "./Footer.css";

const Footer = () => {
  return (
    <div className="footer">
      <div>
        <Typography variant="h5">Our Motivation</Typography>
        <Typography>
          To Revolutionise the Agriculture Sector Of <b>Our Nation</b>
        </Typography>

        <Link to="/contact" className="footerContactBtn">
          <Typography>Contact Us</Typography>
        </Link>
      </div>
      <div>
        <Typography variant="h6">Social Media</Typography>
        <a href="/" target="black">
          <BsYoutube />
        </a>
        <a href="/" target="black">
          <BsInstagram />
        </a>
        <a href="/" target="black">
          <BsLinkedin />
        </a>
      </div>
    </div>
  );
};

export default Footer;
