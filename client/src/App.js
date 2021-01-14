import React from "react";
import Header from "./components/Header";
import Footer from "./components/Footer";
import HomeScreen from "./screens/HomeScreen";
import ProductScreen from "./screens/ProductScreen";
import { Container } from "@material-ui/core/";
import { BrowserRouter as Router, Route } from "react-router-dom";

const App = () => {
  return (
    <div>
      <Router>
        <Header />
        <main>
          <Container fixed>
            <Route path="/" component={HomeScreen} exact />
            <Route path="/products/:id" component={ProductScreen} exact />
            <Route></Route>
            <Route></Route>
          </Container>
        </main>
        <Footer />
      </Router>
    </div>
  );
};

export default App;
