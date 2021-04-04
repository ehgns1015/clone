import React from 'react';

export default function Gaurantees() {
  return (
    <React.Fragment>
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
      <style jsx>{`
        .gaurantees {
          padding-bottom: 60px;
        }
        .guarantees .box {
          background-color: transparent;
          border: 5px solid #e4e4e4;
          transition: all 0.3s ease;
          padding: 50px 20px;
          margin-bottom: 35px;
        }
        .guarantees .box:hover {
          border: 5px solid #1ab394;
        }
        .guarantees .box i {
          font-size: 48px;
          color: #1ab394;
        }
      `}</style>
    </React.Fragment>
  );
}
