import React from 'react'
import Home from './pages/Home';
import ProductList from './pages/ProductList';
import Product from './pages/Product';
import SignUp from './pages/Signup';
import Login from './pages/Login';
import Cart from './pages/Cart';
import {BrowserRouter as Router,Route, Switch } from 'react-router-dom';
import { ApolloProvider } from '@apollo/client';


function App() {
  return (
    <ApolloProvider client={client}>
      <Router>
        <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/products/:category" component={ProductList} />
        <Route exact path="/product/:id" component={Product} />
        <Route exact path="/cart" component={Cart} />
        <Route exact path="/login" component={Login} />
        <Route exact path="/signup" component={SignUp} />

          </Switch>
      </Router>
    </ApolloProvider>
  )
}

export default App;