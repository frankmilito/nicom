
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { ApolloClient, InMemoryCache, ApolloProvider } from '@apollo/client';
import About from './About';
import Home from './components/Home';
import ProductDetails from './components/productDetails/ProductDetails';

const client = new ApolloClient({
  uri: `http://localhost:8082/graphql`,
  cache: new InMemoryCache(),
});

export default () => (
  <ApolloProvider client={client}>
    <Router>
      <Switch>
        <Route path="/about">
          <About />
        </Route>
        <Route exact path="/">
          <Home />
        </Route>
        <Route exact path="/product/:id">
          <ProductDetails />
        </Route>
      </Switch>
    </Router>
  </ApolloProvider>
);
