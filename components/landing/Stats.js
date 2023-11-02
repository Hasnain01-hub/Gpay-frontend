import React from "react";

const Stats = () => {
  return (
    <>
      <div class="token-sale-area pb-70">
        <div class="container">
          <div class="row">
            <div class="col-lg-12 col-sm-12">
              <div class="dreamit-section-title text-center pb-5">
                <h1>Token Sale Proceeds</h1>
              </div>
            </div>
          </div>
          <div class="row">
            <div class="col-lg-6 col-md-6 col-sm-12">
              <div class="pie-chart-thumb">
                <div id="pie-chart"></div>
              </div>
            </div>
            <div class="col-lg-6 col-md-6 col-sm-12">
              <h5>Information</h5>
              <div id="bar-chart"></div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Stats;
