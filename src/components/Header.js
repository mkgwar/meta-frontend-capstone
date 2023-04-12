import React from "react";
import logo from "../assets/logo.png";
import heroImg from "../assets/food2.jpg";
import "../styles/Header.css";

const Header = () => {
  return (
    <header>
      <nav>
        <div id="logo">
          <img src={logo} alt="logo" />
        </div>
        <ul>
          <li>
            <a href="#">Home</a>
          </li>
          <li>
            <a href="#">Reserve a Table</a>
          </li>
          <li>
            <a href="#">About</a>
          </li>
          <li>
            <a href="#">Contact</a>
          </li>
        </ul>
      </nav>
      <section id="hero">
        <div id="hero-text">
          <h1>Little Lemon</h1>
          <h2>Chicago</h2>
          <p>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quas animi
            velit maiores, quidem quia inventore iste quae officiis deserunt
            eaque aspernatur cumque nisi nemo. Sequi quam adipisci, minus alias
            tempora ipsa quasi, voluptates veniam ipsam animi sit. Et dolorem
            quibusdam sint non repellat nemo aliquid iusto, impedit, nihil
            aspernatur aut.
          </p>
        </div>
        <div id="hero-img">
          <img src={heroImg} />
        </div>
      </section>
    </header>
  );
};

export default Header;
