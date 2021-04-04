/* eslint-disable react/prop-types */
import React from 'react';
import Breadcrumb from '@/components/Breadcrumb';
import allImage from '@/assets/images/products/*.jpeg';
import Product from '@/components/Product';
import ProductTabs from './ProductTabs';
import QuantitySelect from './QuantitySelect';
import { Link } from 'react-router-dom';

export default class ProductDetail extends React.Component {
  breadcrumbLinks = [
    { to: '/home', name: 'Home' },
    { to: '/products', name: 'Product List' },
    { name: 'Product Detail' },
  ];
  state = {
    selectedQty: 1,
    product: {
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
    },
    relatedProducts: [
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
    ],
  };

  handleAddCartClicked = (event) => {
    event.preventDefault();
    this.props.onAddCartItem(this.state.product, Number(this.state.selectedQty));
  };

  handleQtyChange = (value) => {
    this.setState({
      selectedQty: value,
    });
  };

  render() {
    const { match } = this.props;
    const { product } = this.state;
    const id = match.params.id;
    const img = allImage[`item${id}`];

    return (
      <React.Fragment>
        <main className="gray-bg">
          <Breadcrumb title="Product Detail" links={this.breadcrumbLinks} />
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
                      <QuantitySelect defaultQty={1} onQtyChange={this.handleQtyChange} />
                      <a onClick={this.handleAddCartClicked} className="btn btn-primary btn-block">
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
              {this.state.relatedProducts.map((p) => (
                <div key={p.id} className="col-xs-6 col-sm-6 col-md-4 col-lg-4">
                  <Product {...p} onCartBtnClick={this.props.onAddCartItem} />
                </div>
              ))}
            </div>
          </section>
        </main>
        <style jsx>{`
          .product-info {
            background-color: #fff;
            -webkit-box-shadow: 0 2px rgba(0, 0, 0, 0.01);
            box-shadow: 0 2px rgba(0, 0, 0, 0.01);
          }

          @media (max-width: 479px) {
            .product-info .media img {
              width: 100%;
              padding: 0 0 30px 0;
            }
          }
          @media (min-width: 480px) {
            .product-info .media im {
              width: 100%;
              padding: 0 0 30px 0;
            }
          }
          @media (min-width: 768px) {
            .product-info .media img {
              width: 100%;
              padding: 0 0 30px 0;
            }
          }
          @media (min-width: 992px) {
            .product-info .media img {
              width: 489px;
              padding: 0 30px 0 0;
            }
          }

          .product-info .media img {
            display: block;
            max-width: 100%;
            height: auto;
          }

          .product-info .media .media-body h2 {
            font-weight: 700;
            margin-bottom: 7px;
            letter-spacing: 1px;
            text-transform: uppercase;
            color: #252525;
            margin-top: 0;
          }
          .product-info .product-category {
            display: block;
          }
          @media (max-width: 479px) {
            .product-info .media .media-body {
              display: block;
              width: 100%;
            }
          }

          @media (min-width: 480px) {
            .product-info .media .media-body {
              display: block;
              width: 100%;
            }
          }

          @media (min-width: 992px) {
            .product-info .media .media-body {
              display: table-cell;
            }
          }

          .product-info .media .media-body h3 {
            font-weight: 700;
            margin-bottom: 7px;
            letter-spacing: 1px;
            color: #252525;
            margin-bottom: 26px;
          }

          .product-info .media .media-body p {
            line-height: 24px;
            color: #797979;
          }

          .product-info .media .media-body .btn-area {
            font-weight: 400;
            font-size: 13px;
            text-transform: uppercase;
          }

          .product-info .media .media-body .btn-area .btn-primary {
            width: 196px;
            height: 55px;
            border-radius: 0;
            border: none;
            background-color: #1ab394;
            padding: 0 20px;
            line-height: 55px;
            position: relative;
            text-align: left;
            letter-spacing: 0.5px;
            vertical-align: top;
            display: inline-block;
          }
        `}</style>
      </React.Fragment>
    );
  }
}
