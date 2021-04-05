import React from 'react';
import PropTypes from 'prop-types';
import allImage from '../assets/images/products/*.jpeg';
import Rating from './Rating';
import { Link } from 'react-router-dom';
import './product.css';

function Product({ id, name, price, info, avg_stars, total_reviews, onCartBtnClick = () => {} }) {
  const img = allImage[`item${id}`];

  const handleCartBtnClick = (evt) => {
    evt.preventDefault();
    evt.stopPropagation();
    onCartBtnClick({ id, name, price, info, avg_stars, total_reviews });
    return false;
  };

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
              <li className="list-inline-item">
                <a href="" onClick={handleCartBtnClick} className="btn btn-light">
                  <i className="fas fa-shopping-cart"></i>
                </a>
              </li>
              <li className="list-inline-item">
                <Link to={`/products/${id}`} className="btn btn-light">
                  <i className="fas fa-eye"></i>
                </Link>
              </li>
            </ul>
            <div className="text-warning">
              <Rating total={5} value={avg_stars}></Rating>
              <span className="text-white">({total_reviews})</span>
            </div>
          </div>
        </div>
      </div>
      <div className="card-body">
        <div className="d-flex justify-content-between align-items-center">
          <a href="" className="item-title">
            {price}
          </a>
          <h4 className="price pull-right">{name}</h4>
        </div>
        <p className="card-text">{info}</p>
      </div>
    </div>
  );
}

Product.propTypes = {
  id: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  price: PropTypes.number.isRequired,
  info: PropTypes.string.isRequired,
  avg_stars: PropTypes.number.isRequired,
  total_reviews: PropTypes.number.isRequired,
  onCartBtnClick: PropTypes.func,
};

export default Product;
