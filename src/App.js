import './App.css';
import React from 'react';
import Navbar from './components/Navbar';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import { useState, useEffect } from 'react';
import './App.css';
import Home from './pages/Home';
import Services from './pages/Services';
import Products from './pages/Products';
import SignUp from './pages/SignUp';
import About from './pages/About';
import ScrollTop from './components/ScrollTop';


function App() {

  const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        const imgs = [
            'images/autumn1.jpg', 'images/img-1.jpg', 'images/img-2.jpg', 'images/img-8.jpg', 'images/junior_article.jpg', 'images/logo2.png', 'images/maxresdefault.jpg',
            'images/me_mod.jpg', 'images/me_mod2.jpg', 'images/me_mod3.jpg', 'images/mug.jpg', 'images/phoneapp.jpg', 'images/roadtrip.jpg', 'images/speak.jpg', 'images/water.jpg', 'images/workfromhome.jpg',
            'images/workout-home.jpg', 'images/yougot.jpg'
        ];

        cacheImages(imgs);
    }, []);

    const cacheImages = async (srcArray) => {
      const promises = await srcArray.map((src) => {
        return new Promise(function(resolve, reject) {
          const img = new Image();

          img.src = src;
          img.onload = resolve();
          img.onerror = reject();
        });
      });

      await Promise.all(promises);
      setIsLoading(false);
    };

  return (
    <>
    <Router>
      {isLoading?<div></div>:
      <div>
      <Navbar/>
      <Switch>
        <Route path="/" exact component={Home}/>
        <Route path='/services' component={Services}/>
        <Route path='/products' component={Products}/>
        <Route path='/sign-up' component={SignUp}/>
        <ScrollTop >
          <Route path='/about' component={About}/>
        </ScrollTop>
      </Switch></div>}
    </Router>
    </>
  );
}

export default App;
