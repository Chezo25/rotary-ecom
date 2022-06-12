import React from "react";
import { AiFillInstgram, AiOutlineTwitter } from "react-icons/ai";

const Footer = () => {
  return (
    <div className="footer-container">
      <p>2022 Rotary Central All rights reserved</p>
      <p className="icons">
        <AiFillInstgram />
        <AiOutlineTwitter />
      </p>
    </div>
  );
};

export default Footer;
