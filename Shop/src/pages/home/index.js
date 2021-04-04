import React, { Component } from 'react';
import Product from '../../components/Product';
import Banner from './Banner';
import Collection from './Category';
import WatchImg from '../../assets/images/products/item5.jpeg';
import ClothesImg from '../../assets/images/products/item6.jpeg';
import ShoesImg from '../../assets/images/products/item7.jpeg';
import GlovesImg from '../../assets/images/products/item10.jpeg';
import Gaurantees from './Gaurantees';

export default class Home extends Component {
  state = {
    newArrivals: [
      {
        id: '1',
        name: 'React Note',
        price: 2000,
        info: 'Lorem ipsum dolor sit amet',
        avg_stars: 4,
        total_reviews: 200,
      },
      {
        id: '2',
        name: 'React Product 2',
        price: 13000,
        info: 'Lorem ipsum dolor sit amet',
        avg_stars: 4,
        total_reviews: 5,
      },
      {
        id: '3',
        name: 'React Product 3',
        price: 4000,
        info: 'Lorem ipsum dolor sit amet',
        avg_stars: 2,
        total_reviews: 10,
      },
      {
        id: '4',
        name: 'React Product 4',
        price: 5000,
        info: 'Lorem ipsum dolor sit amet',
        avg_stars: 1,
        total_reviews: 10,
      },
    ],
    categories: [
      {
        id: '1',
        name: 'Watch',
        to: '#',
        img: WatchImg,
      },
      {
        id: '2',
        name: 'Clothes',
        to: '#',
        img: ClothesImg,
      },
      {
        id: '3',
        name: 'Shoes',
        to: '#',
        img: ShoesImg,
      },
      {
        id: '4',
        name: 'Gloves',
        to: '#',
        img: GlovesImg,
      },
    ],
  };

  handleProductCartClicked = (product) => {
    this.props.onAddCartItem(product);
  };

  render() {
    const { categories, newArrivals } = this.state;

    return (
      <main>
        <Banner />
        <section className="new-arrivals container">
          <div className="row copy">
            <div className="col-12 text-center mt-5">
              <div className="navy-line"></div>
              <h1>NEW ARRIVALS</h1>
              <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit.</p>
            </div>
          </div>
          <div className="row items">
            {newArrivals.map((product) => (
              <div key={product.id} className="col-xs-12 col-sm-6 col-md-3 col-lg-3">
                <Product {...product} onCartBtnClick={this.handleProductCartClicked} />
              </div>
            ))}
          </div>
        </section>
        <section className="featured-collection container my-5">
          <div className="row copy">
            <div className="col-12 text-center">
              <div className="navy-line"></div>
              <h1>FEATURED COLLECTION</h1>
              <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit.</p>
            </div>
          </div>
          <div className="row">
            {categories.map((c) => (
              <div key={c.id} className="col-xs-12 col-sm-6 col-md-3 col-lg-3">
                <Collection name={c.name} to={c.to} alt={c.name} img={c.img} />
              </div>
            ))}
          </div>
        </section>

        <section className="explore flex-fill bg-light my-5 py-4 text-center">
          <h3 className="mb-3">
            Over <strong>50.000</strong> digital products!
          </h3>
          <a className="btn btn-rounded btn-noborder btn-lg btn-primary" href="#products">
            Explore Store <i className="fas fa-arrow-right"></i>
          </a>
        </section>

        <Gaurantees />
      </main>
    );
  }
}
