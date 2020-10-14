import React from "react";

import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";

import $ from "jquery";
import "bootstrap/dist/js/bootstrap.bundle.min";

import Nav from "./components/nav";
import Header from "./components/header";
import Resume from "./components/resume";
import Portfolio from "./components/portfolio";
import Contact from "./components/contact";
import Footer from "./components/footer";

const App = () => {
  $(function () {
    $('[data-toggle="tooltip"]').tooltip();
  });
  return (
    <div className="App">
      <Nav />
      <Header />
      <Resume />
      <Portfolio />
      <Contact />
      <Footer />
    </div>
  );
};

export default App;
