import React from 'react';
import { Route, Switch } from "react-router-dom";
import Header from './components/Header/Header.js';
import Footer from './components/Footer/Footer.js';
import Home from "./pages/Home.js";
import Peliculas from "./pages/Peliculas.js";
import NotFound from "./pages/NotFound.js";
import Populares from './pages/Populares.js';
import TopRated from './pages/TopRated.js';
import Busqueda from './pages/Busqueda.js';
import Detail from "./pages/Detail.js";
import Favoritos from './pages/Favorites'; // Importa la página de favoritos

function App() {
  return (
    <>
      <Header />
      <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/peliculas" exact component={Peliculas} />
        <Route path="/peliculas/populares" component={Populares} />
        <Route path="/peliculas/toprated" component={TopRated} />
        <Route path="/busqueda" component={Busqueda} />
        <Route path="/detail/:id" component={Detail} />
        <Route path="/favoritos" component={Favoritos} /> {/* Ruta para favoritos */}
        <Route component={NotFound} />
      </Switch>
      <Footer />
    </>
  );
}
export default App;
