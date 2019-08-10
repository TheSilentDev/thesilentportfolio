import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import "normalize.css";
import "./App.css";
import Header from "./Header";
import Home from "./Home";
import { library } from "@fortawesome/fontawesome-svg-core";
import { fab } from "@fortawesome/free-brands-svg-icons";
import { faBars, faTimes } from "@fortawesome/free-solid-svg-icons";
import Portfolio from "./Portfolio";
import Contact from "./Contact";

library.add(fab, faBars, faTimes);

function App() {
  return (
    <Router>
      <Header />
      <Route exact path="/" component={Home} />
      <Route exact path="/portfolio" component={Portfolio} />
      <Route exact path="/contact" component={Contact} />
    </Router>
  );
}

export default App;
