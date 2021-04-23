import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import '@fortawesome/fontawesome-free/css/all.css';
import { BrowserRouter, Switch, Redirect } from 'react-router-dom';
import Home from './pages/Home';
import ProductList from './pages/ProductList';
import PublicLayout from './layouts/PublicLayout';
import ProductDetail from './pages/ProductDetail';
import Checkout from './pages/Checkout';
import ScrollTop from './components/ScrollTop';
import './App.css';

export default function App() {
  return (
    <>
      <BrowserRouter>
        <ScrollTop>
          <Switch>
            <PublicLayout path="/home" component={Home} />
            <PublicLayout path="/products" component={ProductList} exact />
            <PublicLayout path="/products/:id" component={ProductDetail} />
            <PublicLayout path="/checkout" component={Checkout} exact />
            <Redirect from="/" to="/home" />
          </Switch>
        </ScrollTop>
      </BrowserRouter>
    </>
  );
}
