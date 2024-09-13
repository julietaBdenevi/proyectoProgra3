import React from 'react';
import { Route, Routes } from "react-router-dom"; 
import Header from './components/Header/Header.js';
import Footer from './components/Footer/Footer.js';
import Home from "./pages/Home.js";
import Peliculas from "./pages/Peliculas.js"
import NotFound from "./pages/NotFound.js"



function App() {
  return (
    <>
      <Header/>
      <Routes>
        <Route exact path="/" component={Home}/>
        <Route path="/peliculas" component={Peliculas}/>
        <Route path="" component={NotFound}/>
      </Routes>
      <Footer />
    </>
  );
}

export default App;
