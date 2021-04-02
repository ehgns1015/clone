import React from 'react';
import Product from './components/Product';
import Home from './pages/home'
import 'bootstrap/dist/css/bootstrap.css';
import '@fortawesome/fontawesome-free/css/all.css';
import './App.css'

function App() {
  const product = {
    id: '1',
    name: 'React Note',
    price: 2000,
    info: 'Lorem ipsum dolor sit amet',
    avg_stars: 4,
    total_reviews: 200,
  };
  return (
    <>
      <Home />
    </>
  );
}

export default App;
