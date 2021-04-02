import React from 'react';
import Rating from './Rating';
import PropTypes from 'prop-types';
import allImage from '../assets/images/products/*.jpeg';

function Product({ product, onCartBtnClick }) {
  const img = allImage[`item${product.id}`];
  return (
    <div className="product card">
      <div className="img-container">
        <img className="card-img-top" src={img} alt="" />
        <div className="img-options">
          <div className="img-options-content">
            <ul className="list-line mb-2 p-0" role="group">
              <li className="list-inline-item">
                <a href="" className="btn btn-light">
                  <i className="fas fa-heart"></i>
                </a>
              </li>
              <li className="list-inline-item" >
                <a href="" className="btn btn-light" onClick={onCartBtnClick}>
                  <i className="fas fa-shopping-cart"></i>
                </a>
              </li>
              <li className="list-inline-item">
                <a href="./product-detail.html" className="btn btn-light">
                  <i className="fas fa-eye"></i>
                </a>
              </li>
            </ul>
            <div className="text-warning">
              <Rating total={5} value={product.avg_stars}></Rating>
              <span className="text-white">({product.total_reviews})</span>
            </div>
          </div>
        </div>
      </div>
      <div className="card-body">
        <div className="d-flex justify-content-between align-items-center">
          <a href="" className="item-title" href="">
            {product.price}
          </a>
          <h4 className="price pull-right">{product.name}</h4>
        </div>
        <p className="card-text">{product.info}</p>
      </div>
    </div>
  );
}

// Product.propTypes = {
//   id: PropTypes.string.isRequired,
//   name: PropTypes.string.isRequired,
//   price: PropTypes.number.isRequired,
//   info: PropTypes.string.isRequired,
//   avg_stars: PropTypes.number.isRequired,
//   total_reviews: PropTypes.number.isRequired,
// };

export default Product;
