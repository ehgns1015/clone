/* eslint-disable react/prop-types */
import React, { useState } from 'react';
import Breadcrumb from '@/components/Breadcrumb';
import allImage from '@/assets/images/products/*.jpeg';
import Product from '@/components/Product';
import ProductTabs from './ProductTabs';
import QuantitySelect from './QuantitySelect';
import { Link } from 'react-router-dom';
import './productdetail.css';

export default function ProductDetail(props) {
  const id = props.match.params.id;
  const img = allImage[`item${id}`];
  const breadcrumbLinks = [
    { to: '/home', name: 'Home' },
    { to: '/products', name: 'Product List' },
    { name: 'Product Detail' },
  ];
  const [selectedQty, setQty] = useState(1);
  const product = {
    id: '3',
    name: 'React Product 3',
    price: 4000,
    info: 'Lorem ipsum dolor sit amet',
    avg_stars: 2,
    total_reviews: 10,
    category: {
      id: 5,
      name: 'Clothes',
    },
  };
  const relatedProducts = [
    {
      id: '3',
      name: 'React Product 3',
      price: 4000,
      info: 'Lorem ipsum dolor sit amet',
      avg_stars: 2,
      total_reviews: 10,
      category: {
        id: 3,
        name: 'Notes',
      },
    },
    {
      id: '4',
      name: 'React Product 4',
      price: 5000,
      info: 'Lorem ipsum dolor sit amet',
      avg_stars: 1,
      total_reviews: 10,
      category: {
        id: 5,
        name: 'Clothes',
      },
    },
  ];
  const handleAddCartClicked = (e) => {
    e.preventDefault();
    props.onAddCartItem(product, Number(selectedQty));
  };

  const handleQtyChange = (value) => setQty(value);
  return (
    <main className="gray-bg">
      <Breadcrumb title="Product Detail" links={breadcrumbLinks} />
      <section className="container product-info p-5">
        <div className="row">
          <div className="col-xs-12 col-sm-12 col-md-12 col-lg-12">
            <div className="media">
              <img src={img} alt="Image" />
              <div className="media-body">
                <h2 className="mt-0">{product.name}</h2>
                <h3>{product.price}</h3>
                <p className="mb-2">
                  <span>{product.info}</span>
                  <br />
                  <span className="product-category mt-5">
                    Category:{' '}
                    <Link className="navy-link" to={`/products?category=${product.category.name}`}>
                      {product.category.name}
                    </Link>
                  </span>
                </p>
                <div className="btn-area mb-5">
                  <QuantitySelect defaultQty={1} onQtyChange={handleQtyChange} />
                  <a onClick={handleAddCartClicked} className="btn btn-primary btn-block">
                    Add to cart <i className="fa fa-angle-right" aria-hidden="true"></i>
                  </a>
                </div>
                <ProductTabs info={product.info} stars={product.avg_stars} />
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="related-products container mt-4">
        <div className="row copy">
          <div className="col-lg-12 text-center">
            <div className="navy-line"></div>
            <h1>Related Products</h1>
          </div>
        </div>
        <div className="row items">
          {relatedProducts.map((p) => (
            <div key={p.id} className="col-xs-6 col-sm-6 col-md-4 col-lg-4">
              <Product {...p} onCartBtnClick={props.onAddCartItem} />
            </div>
          ))}
        </div>
      </section>
    </main>
  );
}
