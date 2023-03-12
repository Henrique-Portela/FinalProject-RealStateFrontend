import React from "react";

import { FaGithub } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="fixarRodape">
      <div ClassName="social">
        <a href="https://github.com/keniakfa">
          <FaGithub color="#fff9c4" size="35" />
        </a>
        <a href="https://github.com/Henrique-Portela">
          <FaGithub color="#fff9c4" size="35" />
        </a>
      </div>
      <p className="copyright">Made by Kênia Araújo and Henrique Portela</p>
    </footer>
  );
};

export default Footer;

