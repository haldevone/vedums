import Navbar from "./components/Navbar";
import './App.css';
import React from "react";
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Home from "./pages/Home";
import Footer from "./components/Footer";

function App() {
  return (
    <>
    <Router>
      <Navbar/>
        <Switch>
          <Home />
        </Switch>
      <Footer />
    </Router>
    </>
  );
}

export default App;
