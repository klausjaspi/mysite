import './App.css';
import React from 'react';
import Navbar from './components/Navbar';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import './App.css';
import Home from './pages/Home';
import Services from './pages/Services';
import Products from './pages/Products';
import SignUp from './pages/SignUp';
import About from './pages/About';

function App() {
  return (
    <>
    <Router>
      <Navbar/>
      <Switch>
        <Route path="/" exact component={Home}/>
        <Route path='/services' component={Services}/>
        <Route path='/products' component={Products}/>
        <Route path='/sign-up' component={SignUp}/>
        <Route path='/about' component={About}/>
      </Switch>
    </Router>
    </>
  );
}

export default App;
