import React from "react";
import "./Peliculas.css"
import PeliculaCard from "../CardPelicula/CardPelicula"

const API_KEY = ""
const peliculasPopulares = `https://api.themoviedb.org/3/movie/popular?api_key=${API_KEY}`
const peliculasTopRated = `https://api.themoviedb.org/3/movie/top_ratedapi_key=${API_KEY}`

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
            .then(response => response.json())
            .then(data => this.setState(
                { populares: data.results.filter((_, i) => i < 5) } /*Traigo los primeros 5 elementos - 5 peliculas populares*/
            ))
            .catch((error) => console.log(error));

        fetch(peliculasTopRated)
            .then(response => response.json())
            .then(data => this.setState(
                { topRate: data.results.filter((_, i) => i < 5) }
            ))
            .catch((error) => console.log(error));
    }
    render() {
        return (
            <>
                <section className="card-container">
                    <h2>Películas Populares</h2>
                <div>
                    {populares.length > 0 ? (
                        populares.map((pelicula) => (
                            <PeliculaCard
                                key={pelicula.id}
                                pelicula={pelicula}
                            />
                        ))
                    ) : (
                        <p>No hay películas populares disponibles.</p> // En caso de que no haya datos
                    )}
                </div>
                <a href="/peliculas/populares">Ver Todas - Películas Populares</a>
            </section>

            <section className="card-container">
                    <h2>Películas Top Rated</h2>
                <div>
                    {populares.length > 0 ? (
                        topRate.map((pelicula) => (
                            <PeliculaCard
                                key={pelicula.id}
                                pelicula={pelicula}
                            />
                        ))
                    ) : (
                        <p>No hay películas top rated disponibles.</p> 
                    )}
                </div>
                <a href="/peliculas/toprated">Ver Todas - Películas Top Rated</a>
            </section>
            </>

        )
    }
}


export default Peliculas;