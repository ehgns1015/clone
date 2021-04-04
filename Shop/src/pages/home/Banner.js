import React from 'react';
import mainImage from '@/assets/images/main.jpg';

export default function Banner() {
  return (
    <React.Fragment>
      <section className="well flex m-0">
        <div className="container flex-fill">
          <div className="caption">
            <h1>Summer Offer</h1>
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit.</p>
            <p>
              <a className="btn btn-lg btn-primary" href="#" role="button">
                Learn more
              </a>
            </p>
          </div>
        </div>
      </section>
      <style jsx>
        {`
          /* banner */
          .well {
            height: 400px;
            background-repeat: no-repeat;
            background-image: url(${mainImage});
            background-size: cover;
            background-position: center center;
          }
          .well .caption {
            position: absolute;
            top: 150px;
            left: 40px;
            bottom: auto;
            right: auto;
            text-align: left;
            color: white;
          }
          .well .caption h1 {
            font-weight: 700;
            font-size: 38px;
            text-transform: uppercase;
          }
        `}
      </style>
    </React.Fragment>
  );
}
