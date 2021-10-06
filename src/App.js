import './App.css';
import React, { useState } from 'react'
import NavBar from './components/NavBar';
import Footer from './components/Footer';
import News from './components/News';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import NewsMarquee from './components/NewsMarquee';
import NewsSlider from './components/NewsSlider';

const App = () => {
  const pageSize = 8;
  // const apiKey = process.env.REACT_APP_NEWS_API
  const [progress, setProgress] = useState(0);
  const [country, setCountry] = useState('us');
  return (
    <div>
      <Router>
        <NavBar class="nav-link active" />
        <NewsMarquee/>
        <Switch>
          <Route exact path="/"><NewsSlider/></Route>
        </Switch>
        <Switch>
          <Route exact path="/"><News/></Route>
          <Route exact path="/business"><News/></Route>
          <Route exact path="/entertainment"><News/></Route>
          <Route exact path="/health"><News/></Route>
          <Route exact path="/science"><News/></Route>
          <Route exact path="/sports"><News/></Route>
          <Route exact path="/technology"><News/></Route>
        </Switch>
        <Footer />

      </Router>
    </div>
  )
}

export default App;
