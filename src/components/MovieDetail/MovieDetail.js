import React, { Component } from "react";
import "./MovieDetail.css";

class MovieDetail extends Component {
    constructor(props) {
        super(props);
        this.state = {
            movie: null,
            loading: true,
            esFavorito: false, // Estado para manejar si es favorito
        };
    }

    componentDidMount() {
        const { id } = this.props; 
        const api_key = "9458a99baf5a9ba3fe341cd43217ef95"; 
        const url = `https://api.themoviedb.org/3/movie/${id}?api_key=${api_key}`;

        fetch(url)
            .then(response => response.json())
            .then(data => {
                this.setState({ movie: data, loading: false });
                this.checkFavorito(data.id); // Verifica si la película es favorita
            })
            .catch(error => {
                console.log(error);
                this.setState({ loading: false });
            });
    }

    checkFavorito(id) {
        const favoritos = JSON.parse(localStorage.getItem("favoritos")) || [];
        this.setState({ esFavorito: favoritos.includes(id) });
    }

    toggleFavorito = () => {
        const { movie, esFavorito } = this.state;
        let favoritos = JSON.parse(localStorage.getItem("favoritos")) || [];

        if (esFavorito) {
            // Quitar de favoritos
            favoritos = favoritos.filter(favoritoId => favoritoId !== movie.id);
            this.setState({ esFavorito: false });
        } else {
            // Agregar a favoritos
            favoritos.push(movie.id);
            this.setState({ esFavorito: true });
        }

        localStorage.setItem("favoritos", JSON.stringify(favoritos));
    }

    render() {
        const { movie, loading, esFavorito } = this.state;

        return (
            <div className="detail-container">
                {loading ? (
                    <p>Cargando...</p>
                ) : (
                    !movie ? (
                        <p>Hubo un error</p>
                    ) : (
                        <>
                            <h3 className="detail-title">{movie.title}</h3>
                            <div className="detail-info">
                                <img
                                    className="detail-img"
                                    src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
                                    alt="Imagen no disponible"
                                />
                                <div className="detail-genres">
                                    <p>Calificación: {movie.vote_average}</p>
                                    <p>Duracion: {movie.runtime} mins</p>
                                    <p>Genero: {movie.genres.map(genre => genre.name).join(' - ')}</p>
                                    <p>Estreno: {movie.release_date}</p>
                                </div>
                                <section className="descripcion-section">
                                    <p>{movie.overview}</p>
                                </section>
                            </div>
                            <button className={`fav-button ${esFavorito ? 'remove' : 'add'}`} onClick={this.toggleFavorito}>
                                {esFavorito ? "Quitar de favoritos" : "Agregar a favoritos"}
                            </button>
                            <a href="/" className="back-link">Volver</a>
                        </>
                    )
                )}
            </div>
        );
    }
}

export default MovieDetail;
