import React from 'react';

export default function Gaurantees() {
  return (
    <>
      <section className="container gaurantees mt-5">
        <div className="row copy">
          <div className="col-lg-12 text-center">
            <div className="navy-line"></div>
            <h1>GAURANTEES</h1>
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit.</p>
          </div>
        </div>
        <div className="row guarantees">
          <div className="col-sm-4 col-xs-12">
            <div className="box text-center">
              <i className="fa fa-truck" aria-hidden="true"></i>
              <h4>Free Shipping</h4>
              <span>Excepteur sint occaecat cupidatat.</span>
            </div>
          </div>
          <div className="col-sm-4 col-xs-12">
            <div className="box text-center">
              <i className="fa fa-money-bill" aria-hidden="true"></i>
              <h4>100% money back</h4>
              <span>Excepteur sint occaecat cupidatat.</span>
            </div>
          </div>
          <div className="col-sm-4 col-xs-12">
            <div className="box text-center">
              <i className="fa fa-headphones" aria-hidden="true"></i>
              <h4>24/7 support</h4>
              <span>Excepteur sint occaecat cupidatat.</span>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
