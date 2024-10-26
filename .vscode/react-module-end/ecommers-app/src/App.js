import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Home from './pages/Home';
import ProductDetail from './pages/ProductDetail';
import CartPage from './pages/CartPage';
import Header from './components/Header';
import Footer from './components/Footer';
import Examples from './pages/Examples';

function App() {
  return (
    <Router>
      <Header />
      <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/product/:id" component={ProductDetail} />
        <Route path="/cart" component={CartPage} />
        <Route path="/examples" component={Examples}/>
      </Switch>
      <Footer />
    </Router>
  );
}

export default App;