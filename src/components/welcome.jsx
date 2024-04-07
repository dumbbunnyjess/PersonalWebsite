import React from "react";
import CustomHeader from "./header";
import Footer from "./footer";
import headshot from "../images/welcome/website_headshot.jpg";
import UCILogo from "../images/welcome/UCILogo.png";

function Welcome() {
  return (
    <div>
      <CustomHeader />

      <div class="main-content">
        <div class="container">
          <div class="third-block">
            <img src={headshot} alt="Personal Headshot" class="image" />
            <subtitle>Image from my recent trip to Cancun</subtitle>
          </div>

          <div class="container">
            <div class="half-block">
              <p>
                <br />
                <br />
                <pbold>Hello world! </pbold>My name is Jessica Lin, and welcome
                to my website. I coded it from scratch using HTML, CSS, and
                JavaScript.
                <br />
                <br />
              </p>
              <br />
              <pbold>About me:</pbold>
              <p>
                <br />
                <img src={UCILogo} alt="UCI" class="circular-image" />
                University of California, Irvine
              </p>
              <p>
                <img
                  src="/images/github.png"
                  alt="Los Angeles"
                  class="circular-image"
                />
                Los Angeles Metrapolitan Area
              </p>
              <p>
                <img
                  src="/images/UCILogo.jpeg"
                  alt="Salt Lake City"
                  class="circular-image"
                />
                Salt Lake City, Utah
              </p>
              <br />
            </div>
            <div class="half-block">
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
                <a href="mailto:linjjessica@gmail.com" class="email-link">
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
