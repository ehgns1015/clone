import React, { useState } from 'react';
import Product from '../../components/Product';
import Banner from '../../components/Banner';
import Navigation from '../../components/Navigation';
import Collection from './Category';
import Gaurantees from './Gurantees';
import Footer from './Footer';
import Drawer from '../../components/Drawer';
import Cart from './Cart';
import WatchImg from '../../assets/images/products/item5.jpeg';
import ClothesImg from '../../assets/images/products/item6.jpeg';
import ShoesImg from '../../assets/images/products/item7.jpeg';
import GlovesImg from '../../assets/images/products/item10.jpeg';

function Home() {
  const [isShopingCartOpen, setShopingCartOpen] = useState(false);
  const handleCartClicked = () => setShopingCartOpen(!isShopingCartOpen);
  const handleCartClosed = () => setShopingCartOpen(false);
  const [cartItems, setCartItems] = useState([]);
  const handleProductCartClicked = (product) => {
    const found = cartItems.find((v) => v.product.id === product.id);
    if (found) {
      found.count += 1;
      setCartItems([...cartItems]);
    } else {
      setCartItems(...cartItems.concat({ product, count: 1 }));
    }
  };
  const handleCartItemRemoved = ({ id }) => {
    const foudnItem = cartItems.find((v) => v.product.id === id);
    if (foudnItem == null) {
      throw new Error(`Can not find the item (${id})`);
    }
    if (foudnItem && foudnItem.counts > 1) {
      foudnItem.counts -= 1;
    } else {
      const index = cartItems.indexOf(foudnItem);
      cartItems.splice(index, 1);
    }
    setCartItems([...cartItems]);
  };
  const handleCheckout = ({ items, total }) => {
    console.log(`Checkout ${JSON.stringify(items)} total: ${total}`);
  };

  const newArrivals = [
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
  ];
  const categories = [
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
  ];

  return (
    <>
      <Drawer
        isOpen={isShopingCartOpen}
        component={Cart}
        items={cartItems}
        onItemRemove={handleCartItemRemoved}
        onCheckout={handleCheckout}
        onClose={handleCartClosed}
      />
      <Navigation onCartClick={handleCartClicked} cartItemCounts={cartItems.length} />
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
                <Product product={product} onCartBtnClick={handleProductCartClicked} />
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
      <Footer />
    </>
  );
}

export default Home;
