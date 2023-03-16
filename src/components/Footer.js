import React from "react";

import { FaGithub } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="fixarRodape text-center justify-content:space-between">
      <div ClassName="social">
        <a href="https://github.com/keniakfa" >
          <FaGithub color="#fff9c4" size="35" />
        </a>
        <a href="https://github.com/Henrique-Portela">
          <FaGithub color="#fff9c4" size="35" />
        </a>
      </div>
      <p className="copyright">Made by Kênia Araújo and Henrique Portela</p>
      <p className= "data" color="white">
        &copy;{new Date().getFullYear()} All rights reserved
      </p>
    </footer>
  );
};

export default Footer;

