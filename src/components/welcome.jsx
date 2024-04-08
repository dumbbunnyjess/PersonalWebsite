import React from "react";
import CustomHeader from "./header";
import Footer from "./footer";
import headshot from "../images/welcome/website_headshot.jpg";
import UCILogo from "../images/welcome/UCILogo.png";

function Welcome() {
  return (
    <div>
      <CustomHeader />

      <div className="main-content">
        <div className="container">
          <div className="third-block">
            <img src={headshot} alt="Personal Headshot" className="image" />
            <div className="subtitle">Image from my recent trip to Cancun</div>
          </div>

          <div className="container">
            <div className="half-block">
              <p>
                <br />
                <br />
                <div className="pbold">Hello world! </div>My name is Jessica
                Lin, and welcome to my website. I coded it from scratch using
                Javascript, React, HTML, and CSS.
                <br />
                <br />
              </p>
              <br />
              <p className="pbold">About me:</p>
              <p>
                <br />
                <img src={UCILogo} alt="UCI" className="circular-image" />
                University of California, Irvine
              </p>
              <p>
                <img
                  src="/images/github.png"
                  alt="Los Angeles"
                  className="circular-image"
                />
                Los Angeles Metrapolitan Area
              </p>
              <p>
                <img
                  src="/images/UCILogo.jpeg"
                  alt="Salt Lake City"
                  className="circular-image"
                />
                Salt Lake City, Utah
              </p>
              <br />
            </div>
            <div className="half-block">
              <p>
                <br />
                <br />
                I have classroom and personal experience working with
                <br />• Python <br />• C++ <br />• JavaScript
                <br />• HTML
                <br />• CSS
                <br />
              </p>
              <br />
              <p>
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
              </p>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default Welcome;
