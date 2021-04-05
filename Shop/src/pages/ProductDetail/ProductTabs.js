import React from 'react';
import PropTypes from 'prop-types';
import Tabs from 'react-bootstrap/Tabs';
import Tab from 'react-bootstrap/Tab';
import Rating from '@/components/Rating';

function ProductTabs({ info, stars }) {
  return (
    <div className="product-info-tab">
      <Tabs defaultActiveKey="info">
        <Tab eventKey="info" title="Info">
          <p>{info}</p>
        </Tab>
        <Tab eventKey="review" title="Reviews">
          <div className="text-center">
            <p className="h2 text-warning">
              <Rating value={stars} total={5} />
            </p>
            <p>
              <strong>{stars}</strong>/5.0 out of <strong>5</strong> Ratings
            </p>
          </div>
        </Tab>
        <Tab eventKey="shipping" title="Shipping">
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eius repudiandae culpa soluta sit, recusandae nulla
          veniam exercitationem consequatur ratione accusantium facere vel, magni laudantium, vero non minus quas
          cupiditate asperiores.
        </Tab>
      </Tabs>
    </div>
  );
}

ProductTabs.propTypes = {
  info: PropTypes.string.isRequired,
  stars: PropTypes.number.isRequired,
};

export default ProductTabs;
