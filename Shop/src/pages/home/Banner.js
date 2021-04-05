import React from 'react';
import mainImage from '@/assets/images/main.jpg';

export default function Banner() {
  return (
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
  );
}
