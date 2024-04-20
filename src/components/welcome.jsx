import React from "react";
import CustomHeader from "./header";
import Footer from "./footer";
import headshot from "../images/welcome/website_headshot.jpg";
import UCILogo from "../images/welcome/UCILogo.png";
import UtahIcon from "../images/welcome/Utah.jpg";
import LAIcon from "../images/welcome/LA.png";
import PythonIcon from "../images/welcome/C++Logo.png";
import CIcon from "../images/welcome/PythonLogo.png";
import JavaScriptIcon from "../images/welcome/JavaScriptLogo.png";
import HTMLIcon from "../images/welcome/HTMLLogo.jpg";
import ReactIcon from "../images/welcome/ReactLogo.png";
import CSSIcon from "../images/welcome/CSSLogo.jpg";

function Welcome() {
  return (
    <div>
      <CustomHeader />

      <div className="main-content">
        <div className="container">
          <div className="third-block">
            <img src={headshot} alt="Personal Headshot" className="image" />
            <div className="image_caption">
              Image from my recent trip to Cancun
            </div>
          </div>

          <div className="container">
            <div className="half-block">
              <br />
              <div>
                <div className="subtitle">Hello world!</div>
                <p>
                  My name is Jessica Lin, and welcome to my website. I coded it
                  from scratch using Javascript, React, HTML, and CSS.
                </p>
              </div>
              <br />
              <br />
              <br />
              <div className="subtitle">About me:</div>
              <div className="logo_container">
                <img
                  src={UCILogo}
                  alt="University of California, Irvine"
                  className="circular-image"
                />
                University of California, Irvine
              </div>
              <div className="logo_container">
                <img
                  src={UtahIcon}
                  alt="Salt Lake City, Utah"
                  className="circular-image"
                />
                Salt Lake City, Utah
              </div>
              <div className="logo_container">
                <img
                  src={LAIcon}
                  alt="Los Angeles"
                  className="circular-image"
                />
                Los Angeles Metrapolitan Area
              </div>
            </div>
            <div className="half-block">
              <p>
                <br />I have classroom and personal experience working with
              </p>
              <br />
              <p>
                <div className="logo_container">
                  <img
                    src={PythonIcon}
                    alt="Los Angeles"
                    className="circular-image"
                  />
                  Python
                </div>
                <div className="logo_container">
                  <img
                    src={CIcon}
                    alt="Los Angeles"
                    className="circular-image"
                  />
                  C++
                </div>
                <div className="logo_container">
                  <img
                    src={JavaScriptIcon}
                    alt="Los Angeles"
                    className="circular-image"
                  />
                  JavaScript
                </div>
                <div className="logo_container">
                  <img
                    src={HTMLIcon}
                    alt="Los Angeles"
                    className="circular-image"
                  />
                  HTML
                </div>
                <div className="logo_container">
                  <img
                    src={ReactIcon}
                    alt="Los Angeles"
                    className="circular-image"
                  />
                  React
                </div>
                <div className="logo_container">
                  <img
                    src={CSSIcon}
                    alt="Los Angeles"
                    className="circular-image"
                  />
                  CSS
                </div>
                {/* <br />• Python <br />• C++ <br />• JavaScript
                <br />• HTML
                <br />• CSS
                <br /> */}
              </p>
              <br />
              {/* <p>
                In my freetime, I enjoy thrifting, gaming, working out, playing
                poker, and finding new music!
              </p>
              <br />
              <p>
                Feel free to reach out to me anytime at
                <a href="mailto:linjjessica@gmail.com" className="email-link">
                  linjjessica@gmail.com
                </a>
                .
              </p> */}
            </div>
            <div className="container"></div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default Welcome;
