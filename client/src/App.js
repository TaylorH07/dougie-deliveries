import React from 'react'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import {
  ApolloClient,
  InMemoryCache,
  ApolloProvider,
  createHttpLink,
} from '@apollo/client';
import { setContext } from '@apollo/client/link/context';

import Home from './pages/Home';
import Login from './pages/Login';
import ProductList from './pages/ProductList';
import Signup from './pages/Signup'
import Cart from './pages/Detail';
import Product from './pages/Product';

const httpLink = createHttpLink({
  uri: '/graphql',
});

const authLink = setContext((_, { headers }) => {
  const token = localStorage.getItem('id_token');
  return {
    headers: {
      ...headers,
      authorization: token ? `Bearer ${token}` : '',
    },
  };
});

const client = new ApolloClient({
  link: authLink.concat(httpLink),
  cache: new InMemoryCache(),
});

function App() {
  
  return (
    <ApolloProvider client={client}>
      <Router>
        <div>
            <Switch>
              <Route exact path="/" component={Home} />
              <Route path="/products/:category" component={ProductList} />
              <Route path="/product/:id" component={Product} />
              <Route path="/cart" component={Cart} />
              <Route path="/login" component={Login} />
              <Route path ="/register" component={Signup} />
            </Switch>
        </div>
      </Router>
    </ApolloProvider>
  );
}

export default App;