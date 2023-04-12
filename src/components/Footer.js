import React from "react";
import "../styles/Footer.css";
import footerLogo from "../assets/footer logo.png";

const Footer = () => {
  return (
    <footer>
      <div>
        <img src={footerLogo} />
      </div>
      <p>Copyright &copy; Little Lemon Restaurant.</p>
    </footer>
  );
};

export default Footer;
