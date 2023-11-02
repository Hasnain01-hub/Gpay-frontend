import React from "react";

const Sale = () => {
  return (
    <>
      <div class="token-area pt-80 pb-70">
        <div class="container">
          <div class="row">
            <div class="col-lg-12 col-sm-12">
              <div class="dreamit-section-title text-center up pb-5">
                <h4>Token Sales</h4>
                <h1>
                  ICO Token <span>Sales</span>
                </h1>
                <p class="section-text">
                  Cryptocurrencies are used primarily outside existing banking
                  and coingovernmental institutions and are exchanged
                </p>
              </div>
            </div>
          </div>
          <div class="row">
            <div class="col-lg-6 col-md-6 col-sm-12">
              <div class="row">
                <div class="col-lg-6 ol-md-6">
                  <div
                    class="single-token-box wow fadeInLeft"
                    data-wow-delay=".4s"
                  >
                    <div class="token-title">
                      <h4>Exchange Rate</h4>
                      <p>
                        <span>1 ETH</span> = $39000.00
                      </p>
                      <p class="token-text">
                        <span>1 BTC</span> = $120.00
                      </p>
                    </div>
                  </div>
                </div>
                <div class="col-lg-6 ol-md-6">
                  <div
                    class="single-token-box wow fadeInLeft"
                    data-wow-delay=".5s"
                  >
                    <div class="token-title">
                      <h4>Monthly Rate</h4>
                      <p>
                        <span>Low</span> = $39000.00
                      </p>
                      <p class="token-text">
                        <span>High</span> = $120.00
                      </p>
                    </div>
                  </div>
                </div>
                <div class="col-lg-6 ol-md-6">
                  <div
                    class="single-token-box wow fadeInLeft"
                    data-wow-delay=".6s"
                  >
                    <div class="token-title">
                      <h4>Private Sales</h4>
                      <p>
                        <span>1 BTC</span> = $39000.00
                      </p>
                      <p class="token-text">
                        Bonus <span>65% (1.10)</span>
                      </p>
                    </div>
                  </div>
                </div>
                <div class="col-lg-6 ol-md-6">
                  <div
                    class="single-token-box wow fadeInLeft"
                    data-wow-delay=".7s"
                  >
                    <div class="token-title">
                      <h4>Public Sales</h4>
                      <p>
                        <span>1 BTC</span> = $39000.00
                      </p>
                      <p class="token-text">
                        Bonus <span>65% (1.10)</span>
                      </p>
                    </div>
                  </div>
                </div>
                <div class="col-lg-6 ol-md-6">
                  <div
                    class="single-token-box wow fadeInLeft"
                    data-wow-delay=".8s"
                  >
                    <div class="token-title">
                      <h4>Investors</h4>
                      <p>890,000.00</p>
                      <p class="token-text">
                        Ave. Invest($) <span>: 1200</span>
                      </p>
                    </div>
                  </div>
                </div>
                <div class="col-lg-6 ol-md-6">
                  <div
                    class="single-token-box wow fadeInLeft"
                    data-wow-delay=".9s"
                  >
                    <div class="token-title">
                      <h4>Pivot Points</h4>
                      <p>
                        <span>1 ETH</span> = $39000.00
                      </p>
                      <p class="token-text">
                        <span>1 BTC</span> = $120.00
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div class="col-lg-6 col-md-6">
              <div
                class="count-down-date-tabs wow fadeInLeft"
                data-wow-delay=".5s"
              >
                <div id="countdown">
                  <div class="coundown-title">
                    <h3>Token Sale Start in</h3>
                  </div>
                  <div id="tiles"></div>
                  <div class="labels">
                    <ul>
                      <li>Days</li>
                    </ul>
                    <ul>
                      <li>Hours</li>
                    </ul>
                    <ul>
                      <li>Mins</li>
                    </ul>
                    <ul>
                      <li class="labels-text">Sec</li>
                    </ul>
                  </div>
                </div>
                <div class="wrapper">
                  <div class="extra-controls form-inline">
                    <div class="form-group">
                      <input
                        type="text"
                        class="js-input-from form-control"
                        value="0"
                      />
                      <span>
                        <input
                          type="text"
                          class="js-input-to form-control"
                          value="0"
                        />
                      </span>
                    </div>
                  </div>
                  <div class="range-slider">
                    <input type="text" class="js-range-slider" value="" />
                  </div>
                  <div class="range-title-menu">
                    <ul>
                      <li>Soft Cap</li>
                      <li>Crowdsale</li>
                      <li class="range-text">Hard Cap</li>
                    </ul>
                  </div>
                </div>
                <div class="count-shape">
                  <img src="assets/images/resource/count.png" alt="" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Sale;
