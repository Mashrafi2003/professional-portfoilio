import React from "react";
import "./Navigation.css";
import sidenav from "../../images/side.png";
import Typewriter from "typewriter-effect";
const Navigation = () => {
  return (
    <div>
      <div className="header">
        <nav>
          <h3 className="navigation-header">Mashrafi</h3>
          <ul>
            <li>
              <a href="/home">Home</a>
            </li>
            <li>
              <a href="/about">About</a>
            </li>
            <li>
              <a href="/contact">Contact</a>
            </li>
            <li>
              <a href="/projects">Projects</a>
            </li>
          </ul>
          <img className="menu-icon" src={sidenav} alt="" />
        </nav>
        <div className="text-box">
          <h1>I am</h1>
          <h1>
            <span className="text-danger">
              <Typewriter
                onInit={(Typewriter) => {
                  Typewriter.typeString("Mashrafi Bin Shoyeb")
                    .pauseFor(1000)
                    .deleteAll()
                    .typeString(" a Web Developer")
                    .pauseFor(1000)
                    .deleteAll()
                    .typeString(" React Developer")
                    .deleteAll()
                    .typeString("Mashrafi Bin Shoyeb")
                    .start();
                }}
              />
            </span>
          </h1>
          <p>
            I'm a Bangladesh based web designer & front‑end developer focused on{" "}
            <br />
            crafting clean & user‑friendly experiences, I am passionate <br />{" "}
            about building excellent software that improves <br /> the lives of
            those around me.
          </p>
          <a
            id="download"
            href="https://drive.google.com/file/d/1ZDRGFr1tiEV9bHBUlfvaHbcw_r1ZhVXO/view"
            target="_blank"
          >
            <span></span>
            <span></span>
            <span></span>
            <span></span>
            Download CV
          </a>
          <a href="/contact" className="mx-4">
            <span></span>
            <span></span>
            <span></span>
            <span></span>
            Contact Me{" "}
          </a>
        </div>
      </div>
    </div>
  );
};

export default Navigation;
