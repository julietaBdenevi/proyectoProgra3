import React, { Component } from "react";
import "./Peliculas.css";
import CardPelicula from "../CardPelicula/CardPelicula";

const API_KEY = "9458a99baf5a9ba3fe341cd43217ef95";
const peliculasPopulares = `https://api.themoviedb.org/3/movie/popular?api_key=${API_KEY}`;
const peliculasTopRated = `https://api.themoviedb.org/3/movie/top_rated?api_key=${API_KEY}`;

class Peliculas extends Component {
    constructor() {
        super();
        this.state = {
            populares: [],
            topRate: [],
            favoritas: [],
        };
    }

    componentDidMount() {
        fetch(peliculasPopulares)
            .then((response) => response.json())
            .then((data) => {
                this.setState({
                    populares: data.results.filter((_, i) => i < 5), // Traigo los primeros 5 elementos - 5 películas populares
                });
            })
            .catch((error) => console.log(error));

        fetch(peliculasTopRated)
            .then((response) => response.json())
            .then((data) => {
                this.setState({
                    topRate: data.results.filter((_, i) => i < 5),
                });
            })
            .catch((error) => console.log(error));
    }

    render() {
        return (
            <>
                <section className="card-container">
                    <h2 className="section-title">Películas Populares</h2>
                    <div className="cards-wrapper">
                        {this.state.populares.length > 0 ? (
                            this.state.populares.map((pelicula) => (
                                <CardPelicula key={pelicula.id} pelicula={pelicula} />
                            ))
                        ) : (
                            <p className="no-movies">No hay películas populares disponibles.</p>
                        )}
                    </div>
                    <a className="view-all-link" href="/peliculas/populares">
                        Ver Todas - Películas Populares
                    </a>
                </section>

                <section className="card-container">
                    <h2 className="section-title">Películas Top Rated</h2>
                    <div className="cards-wrapper">
                        {this.state.topRate.length > 0 ? (
                            this.state.topRate.map((pelicula) => (
                                <CardPelicula key={pelicula.id} pelicula={pelicula} />
                            ))
                        ) : (
                            <p className="no-movies">No hay películas top rated disponibles.</p>
                        )}
                    </div>
                    <a className="view-all-link" href="/peliculas/toprated">
                        Ver Todas - Películas Top Rated
                    </a>
                </section>
            </>
        );
    }
}

export default Peliculas;
