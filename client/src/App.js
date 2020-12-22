import React from "react";
import Header from "./components/Header";
import Footer from "./components/Footer";
import HomeScreen from "./screens/HomeScreen";
import ProductScreen from "./screens/ProductScreen";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

const App = () => {
  return (
    <div>
      <Router>
        <Header />
        <main>
          <Route path="/" component={HomeScreen} exact />
          <Route path="/products/:id" component={ProductScreen} exact />
          <Route></Route>
          <Route></Route>
        </main>
        <Footer />
      </Router>
    </div>
  );
};

export default App;
