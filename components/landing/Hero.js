import React from "react";

const Hero = () => {
  return (
    <>
      <div class="clearfix" style={{ clear: " both" }}></div>
      <div id="particles">
        <div id="webcoderskull">
          <div class="hero-section">
            <div class="container">
              <div class="row align-items-center">
                <div class="col-md-6">
                  <div class="hero-content wow fadeInLeft" data-wow-delay=".4s">
                    <div class="hero-title">
                      <span>0</span>
                      <h4>No Trading Commission</h4>
                      <h1 class="hero-title">Next Generation</h1>
                      <h1 class="hero">ICO Crypto</h1>
                    </div>
                    <div class="hero-text">
                      <p>
                        Cryptography, encryption process of transforming
                        information <br />
                        referred to as plaintext) using done.
                      </p>
                    </div>
                    <div class="hero-button">
                      <a href="#">Start Trading</a>
                    </div>
                    <div class="hero-bottom-text">
                      <p>
                        <span>
                          <i class="fas fa-check"></i>
                        </span>{" "}
                        available android & IOS Mobile Apps
                      </p>
                    </div>
                  </div>
                </div>
                <div class="col-md-6">
                  <div
                    class="dreamit-hero-thumb wow fadeInLeft"
                    data-wow-delay=".5s"
                  >
                    <div class="hero-main-thumb">
                      <img src="assets/images/slider/main.png" alt="" />
                    </div>
                    <div class="hero-thumb-inner1 bounce-animate4">
                      <img src="assets/images/slider/img1.png" alt="" />
                    </div>
                    <div class="hero-thumb-inner2 bounce-animate">
                      <img src="assets/images/slider/img2.png" alt="" />
                    </div>
                    <div class="hero-thumb-inner3 bounce-animate3">
                      <img src="assets/images/slider/img3.png" alt="" />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="clearfix" style={{ clear: " both" }}></div>
    </>
  );
};

export default Hero;
