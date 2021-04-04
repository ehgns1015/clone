import React from 'react';
import Breadcrumb from '@/components/Breadcrumb';
import Product from '@/components/Product';
import BootstrapSlider from '@/components/BootstrapSlider';

export default class ProductList extends React.Component {
  breadcrumbLinks = [{ to: '/home', name: 'Home' }, { name: 'Product List' }];

  state = {
    categories: [
      { id: '1', name: 'Shirts', counts: 3 },
      { id: '2', name: 'Dolls', counts: 2 },
      { id: '3', name: 'Notes', counts: 5 },
      { id: '4', name: 'Watches', counts: 1 },
      { id: '5', name: 'Clothes', counts: 10 },
      { id: '6', name: 'Shoes', counts: 4 },
      { id: '7', name: 'GLoves', counts: 10 },
    ],
    products: [
      {
        id: '1',
        name: 'React Note',
        price: 2000,
        info: 'Lorem ipsum dolor sit amet',
        avg_stars: 4,
        total_reviews: 200,
        category: 3,
      },
      {
        id: '2',
        name: 'React Product 2',
        price: 13000,
        info: 'Lorem ipsum dolor sit amet',
        avg_stars: 4,
        total_reviews: 5,
        category: 4,
      },
      {
        id: '3',
        name: 'React Product 3',
        price: 4000,
        info: 'Lorem ipsum dolor sit amet',
        avg_stars: 2,
        total_reviews: 10,
        category: 2,
      },
      {
        id: '4',
        name: 'React Product 4',
        price: 5000,
        info: 'Lorem ipsum dolor sit amet',
        avg_stars: 1,
        total_reviews: 10,
        category: 5,
      },
    ],
    priceFilter: [250, 450],
  };

  handleOnSlide = (values) => {
    this.setState({
      priceFilter: values,
    });
  };

  render() {
    return (
      <React.Fragment>
        <main className="gray-bg">
          <Breadcrumb title="Product List" links={this.breadcrumbLinks} />
          <section className="container sidbar">
            <div className="row">
              <div className="col-xs-12 col-sm-3 col-md-3 col-lg-3">
                <div className="product-category-card card mb-3">
                  <div className="card-header">Product categories</div>
                  <div className="card-body list-group">
                    {this.state.categories.map((c) => (
                      <a
                        key={c.id}
                        className="list-group-item list-group-item-action d-flex justify-content-between align-items-center">
                        {c.name} <span className="badge badge-secondary badge-pill">{c.counts}</span>
                      </a>
                    ))}
                  </div>
                </div>
                <div className="card price-range-card">
                  <div className="card-header">Filter by Price</div>
                  <div className="card-body">
                    <BootstrapSlider
                      min={10}
                      max={1000}
                      step={5}
                      value={this.state.priceFilter}
                      onSlide={this.handleOnSlide}
                    />
                    <br />
                    <span className="amount-wrapper">
                      <span className="price-label">Price:</span>
                      <input type="text" id="price-min" readOnly value={`$ ${this.state.priceFilter[0]}`} />
                      <strong>-</strong>
                      <input type="text" id="price-max" readOnly value={`$ ${this.state.priceFilter[1]}`} />
                    </span>
                  </div>
                </div>
              </div>

              <div className="col-xs-12 col-sm-9 col-md-9 col-lg-9">
                <div className="row filter-area mb-3">
                  <div className="col-xs-12 col-sm-12 col-md-12 col-lg-12">
                    <select name="guiest_id1" id="guiest_id1" className="select-drop">
                      <option value="0">Default sorting</option>
                      <option value="1">Sort by popularity</option>
                      <option value="2">Sort by rating</option>
                      <option value="3">Sort by newness</option>
                      <option value="3">Sort by price</option>
                    </select>
                  </div>
                </div>
                <div className="row items">
                  {this.state.products.map((p) => (
                    <div key={p.id} className="col-xs-6 col-sm-6 col-md-4 col-lg-4">
                      <Product {...p} onCartBtnClick={this.props.onAddCartItem} />
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </section>
        </main>
        <style jsx>{`
          .sidbar .card {
            margin-bottom: 16px;
          }
          .sidbar .product-category-card .card-body {
            padding: 0;
          }
          .sidbar .card-body .list-group-item {
            border: none;
          }
          .sidbar .card-header {
            background: #1ab394;
            color: #fff;
          }
          .list-group-item {
            font-weight: 400;
            color: #646464;
          }

          .price-range-card .amount-wrapper input {
            background-color: transparent;
            border: 0;
            width: 48px;
            font-size: 14px;
            color: #252525;
            font-weight: 700;
            text-align: right;
          }
        `}</style>
      </React.Fragment>
    );
  }
}
