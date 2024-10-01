import React, { Component } from "react";
import CardPelicula from "../CardPelicula/CardPelicula";

const API_KEY = "9458a99baf5a9ba3fe341cd43217ef95";

class PeliculasTopRated extends Component {
  constructor() {
    super();
    this.state = {
      topRate: [], // movies
      filteredMovies: [],
      verMas: 1, // actual page
      filterValue: "",
      textoBoton: "Ver más",
      favoritos: [],
    };
  }

  // Fetch inicial de las películas
  fetchTopRatedMovies = () => {
    fetch(` https://api.themoviedb.org/3/movie/top_rated?api_key=${API_KEY}&page=${this.state.verMas}`
  

      )
      .then((response) => response.json())
      .then((data) => {
        // Filtra las nuevas películas
        const nuevasPeliculas = data.results.filter(
          (nuevaPelicula) =>
            
            !this.state.topRate.some(
              (peliculaExistente) => peliculaExistente.id === nuevaPelicula.id
              
            )
        );


        // Actualiza el estado solo con las nuevas películas
        this.setState((prevState) => ({
          topRate: prevState.topRate.concat(nuevasPeliculas),
          filteredMovies: prevState.topRate.concat(nuevasPeliculas),
        }));
      })
      .catch((error) => console.log(error));
  };

  componentDidMount() {
    this.fetchTopRatedMovies();
  }

  // Verifica si el estado de ⁠ verMas ⁠ cambió antes de hacer un nuevo fetch
  componentDidUpdate(prevProps, prevState) {
    if (prevState.verMas !== this.state.verMas) {
      this.fetchTopRatedMovies();
    }
  }

  handleVerMas = () => {
    this.setState((prevState) => ({
      verMas: prevState.verMas + 1,
    }));
  };

  handleResetFilter = () => {
    this.setState({
      filterValue: "",
      filteredMovies: this.state.topRate,
    });
  };

  handleFilter = (e) => {
    const userValue = e.target.value;
    this.setState({
      filterValue: userValue,
      filteredMovies: this.state.topRate.filter((movie) =>
        movie.title.toLowerCase().includes(userValue.toLowerCase())
      ),
    });
  };

  agregarFav = (id) => {
    let { favoritos } = this.state;
    if (favoritos.includes(id)) {
      favoritos = favoritos.filter((favoritoId) => favoritoId !== id);
    } else {
      favoritos.push(id);
    }
    localStorage.setItem("favoritos", JSON.stringify(favoritos));
    this.setState({ favoritos });
  };

  esFavorito = (id) => {
    return this.state.favoritos.includes(id);
  };

  render() {

    //Ternario que si el length de el valor de filtrado es mayor a 0, setea que se vea el filteredMovies antes que las topRate
    const peliculasAMostrar = this.state.filterValue.length > 0 ? this.state.filteredMovies : this.state.topRate;

    return (
      <section className="card-container">
        <h2>Películas Populares</h2>
        <input
          type="text"
          value={this.state.filterValue}
          onChange={(e) => this.handleFilter(e)}
        />
        <button onClick={() => this.handleResetFilter()}>Reset Filter</button>
        <div>
          {peliculasAMostrar.length > 0 ? (
            peliculasAMostrar.map((pelicula) => (
              <CardPelicula
                key={pelicula.id}
                pelicula={pelicula}
                esFavorito={this.esFavorito}
                agregarFav={this.agregarFav}
              />
            ))
          ) : (
            <p className="no-movies">No hay películas  disponibles.</p>
          )}
        </div>
        <button onClick={this.handleVerMas}>Ver más</button>
      </section>
    );
  }
}

export default PeliculasTopRated;