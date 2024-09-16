import React from 'react';
import { Route, Switch } from "react-router-dom"; 
import Header from './components/Header/Header.js';
import Footer from './components/Footer/Footer.js';
import Home from "./pages/Home.js";
import Peliculas from "./pages/Peliculas.js"
import NotFound from "./pages/NotFound.js"



function App() {
  return (
    <>
      <Header/>
      <Switch>
        <Route exact path="/" component={Home}/>
        <Route path="/peliculas" component={Peliculas}/>
        <Route path="/peliculas/populares" component={Peliculas}/>
        <Route path="/peliculas/toprated" component={Peliculas}/>
        <Route path="" component={NotFound}/>
      </Switch>
      <Footer />
    </>
  );
}

export default App;
