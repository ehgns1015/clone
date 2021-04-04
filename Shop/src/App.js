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

export default class App extends Component {
  render() {
    return (
      <React.Fragment>
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
        <style jsx global>{`
          @import url('//fonts.googleapis.com/css?family=Open+Sans:300,400,600,700&amp;lang=en');

          body {
            color: #676a6c;
            font-family: 'Open Sans', helvetica, arial, sans-serif;
            font-size: 14px;
          }
          h1 {
            font-size: 30px;
            font-weight: 200;
          }
          h2 {
            font-size: 24px;
          }
          h2,
          h3,
          h4,
          h5,
          h6 {
            font-weight: 100;
          }
          .bg-dark {
            background-color: #252525 !important;
          }
          .btn-primary {
            background-color: #1ab394;
            border-color: #1ab394;
            color: #ffffff;
            font-size: 14px;
            padding: 10px 20px;
            font-weight: 600;
          }
          .btn-primary:hover,
          .btn-primary:focus,
          .btn-primary.active,
          .btn-primary:not(:disabled):not(.disabled):active {
            background-color: #18a689;
            border-color: #18a689;
            color: #ffffff;
          }
          section p {
            color: rgb(210, 209, 209);
            font-size: 15px;
          }
          .navy-line {
            width: 60px;
            height: 1px;
            margin: 8px auto 0;
            border-bottom: 2px solid #1ab394;
          }
          .navy-line-full {
            height: 1px;
            border-bottom: 2px solid #1ab394;
          }
          .navy-bg {
            background-color: #1ab394;
            color: #ffffff;
          }
          .navy {
            color: #1ab394;
          }
          .gray-bg {
            background-color: #f3f3f4;
            width: 100%;
          }
          a.navy-link {
            color: #1ab394;
            text-decoration: none;
            font-size: 14px;
          }
          a.navy-link:hover {
            color: #17a185;
          }
          .copy {
            margin-bottom: 20px;
          }
          .copy h1 {
            margin: 0.67em 0;
            text-align: center;
          }

          .copy p {
            text-align: center;
          }
        `}</style>
      </React.Fragment>
    );
  }
}
