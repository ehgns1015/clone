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
      <style jsx>{`
        .product-info-tab :global(.nav-tabs) {
          background-color: transparent;
          border-bottom: 1px solid #e9e9e9;
          border-bottom: none;
        }

        .product-info-tab :global(.nav-tabs > a) {
          -webkit-transition: all 0.15s ease-out;
          transition: all 0.15s ease-out;
          color: #646464;
          font-weight: 600;
          border-radius: 0;
        }
        .product-info-tab :global(.nav-tabs > a:hover),
        .product-info-tab :global(.nav-tabs > a:focus) {
          color: #5c90d2;
          background-color: transparent;
          border-color: transparent;
          outline: none;
          -webkit-box-shadow: 0 2px #5c90d2;
          box-shadow: 0 2px #5c90d2;
        }
        .product-info-tab :global(.nav-tabs > a.active),
        .product-info-tab :global(.nav-tabs > a.active:hover),
        .product-info-tab :global(.nav-tabs > a.active:focus) {
          color: #646464;
          background-color: #fff;
          border-color: transparent;
          outline: none;
          -webkit-box-shadow: 0 2px #5c90d2;
          box-shadow: 0 2px #5c90d2;
        }
        .product-info-tab :global(.tab-content) {
          padding: 20px 20px 1px;
          overflow: hidden;
        }
      `}</style>
    </div>
  );
}

ProductTabs.propTypes = {
  info: PropTypes.string.isRequired,
  stars: PropTypes.number.isRequired,
};

export default ProductTabs;
