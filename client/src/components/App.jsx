import React, { Component } from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
// Material UI Components
import CssBaseline from '@material-ui/core/CssBaseline';
import Container from '@material-ui/core/Container';
// React Components
import Header from './overview/Header.jsx';
import ProductDetails from './ProductDetails.jsx';
import Cart from './overview/Cart.jsx';

export default class App extends Component {
  render() {
    return (
      <Container maxWidth={false}>
        <CssBaseline />
        <BrowserRouter>
          <Header />
          <Route exact path="/" component={Cart} />
          <Route exact path="/:id" component={ProductDetails} />
        </BrowserRouter>
      </Container>
    );
  }
}
