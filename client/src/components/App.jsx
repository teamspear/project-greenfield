import React, { Component } from 'react';
import { BrowserRouter, Route } from 'react-router-dom'

function ProductDetails({ match }) {
  return (
    <div>
      <h3>ID: {match.params.id}</h3>
    </div>
  );
}

export default class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <div>
          <div>
            <h1>Vibranium</h1>
          </div>
          <Route path='/:id' component={ProductDetails} />
        </div>
      </BrowserRouter>
    );
  }
}
