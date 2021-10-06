import './App.css';
import React, { useState } from 'react'
import NavBar from './components/NavBar';
import Footer from './components/Footer';
import News from './components/News';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import NewsMarquee from './components/NewsMarquee';
import NewsSlider from './components/NewsSlider';

const App = () => {
  return (
    <div>
      <Router>
        <NavBar class="nav-link active" />
        <NewsMarquee/>
        <NewsSlider/>
        <News/>
        <Footer />

      </Router>
    </div>
  )
}

export default App;
