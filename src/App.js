import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Portfolio from "./pages/Portfolio";
import Group from "./components/Group/Group";

import "./App.css";

function App() {
  return (
    <Router>
      <div className="container-fluid p-0">
        <Header />
        <Route exact path="/" component={About} />
        <Route exact path="/contact" component={Contact} />
        <Route exact path="/portfolio" component={Portfolio} />
        <Route exact path="/groupprojects" component={Group} />

        <Footer />
      </div>
    </Router>
  );
}

export default App;
