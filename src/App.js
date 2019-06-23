import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import "normalize.css";
import "./App.css";
import Header from "./Header";
import Hero from "./Hero";
import Projects from "./Projects";
import { library } from "@fortawesome/fontawesome-svg-core";
import { fab } from "@fortawesome/free-brands-svg-icons";
import { faBars, faTimes } from "@fortawesome/free-solid-svg-icons";

library.add(fab, faBars, faTimes);

function App() {
  return (
    <>
      <div
        className="App"
        style={{
          background: "#fff"
        }}
      >
        <Header />
        <Hero />
        <Projects />
      </div>
    </>
  );
}

export default App;
