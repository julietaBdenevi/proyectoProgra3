import React, { Component } from "react";
import CardPelicula from "../CardPelicula/CardPelicula";
import "./Favoritos.css";

class Favorites extends Component {
  constructor() {
    super();
    this.state = {
      favoritos: [],
      pelisFav: [],
      verDescripcionId: null,
    };
  }

  componentDidMount() {
    const favoritos = localStorage.getItem("favoritos") ? JSON.parse(localStorage.getItem("favoritos")) : [];
    this.setState({ favoritos });

    for (let i = 0; i < favoritos.length; i++) {
      this.cargarDetalle(favoritos[i]);
    }
  }
  
  cargarDetalle = (id) => {
    fetch(`https://api.themoviedb.org/3/movie/${id}?api_key=9458a99baf5a9ba3fe341cd43217ef95`)
      .then((response) => response.json())
      .then((data) => {
        const nuevasPelis = this.state.pelisFav;
        nuevasPelis.push(data);
        this.setState({ pelisFav: nuevasPelis });
      })
      .catch((error) => console.log(error));
  };
  sacarFav = (id) => {
    let nuevosFavs = this.state.favoritos.filter((favoritoId) => favoritoId !== id);
    localStorage.setItem("favoritos", JSON.stringify(nuevosFavs));

    const nuevasPelisFav = this.state.pelisFav.filter((peli) => peli.id !== id);
    this.setState({ favoritos: nuevosFavs, pelisFav: nuevasPelisFav });
  };
  mostrarDescrip = (id) => {
    this.setState({
      verDescripcionId: this.state.verDescripcionId === id ? null : id,
    });
  };
  esFavorito = (id) => {
    return this.state.favoritos.includes(id);
  };
  render() {
    const { pelisFav, verDescripcionId } = this.state;
    return (
      <div>
        <h2>Mis Películas Favoritas</h2>
        <div className="favoritos-container">
          {pelisFav.length > 0 ? (
            pelisFav.map((peli) => (
              <div className="card" key={peli.id}>
                <CardPelicula
                  pelikey={peli.id}
                  pelicula={peli}
                  esFavorito={this.esFavorito}
                  agregarFav={this.sacarFav}
                  verDescripcionId={verDescripcionId}
                  verDescripcion={this.mostrarDescrip}
                />
              </div>
            ))
          ) : (
            <p>No hay nada en favoritos aún</p>
          )}
        </div>
      </div>
    );
  }
}

export default Favorites;
