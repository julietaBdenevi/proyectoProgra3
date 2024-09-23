import React, { Component } from "react";
import "./CardPelicula.css";

class CardPelicula extends Component {
    constructor() {
        super();
        this.state = {
            verDescripcion: false,
            esFavorito: false
        }
    };

    verDescripcion() {
        this.setState({
            verDescripcion: !this.state.verDescripcion
        });
    }

    render() {
        const { pelicula } = this.props;
        return (
            <div className="card-pelicula">
                <img
                    src={`https://image.tmdb.org/t/p/w500${pelicula.poster_path}`}
                    alt={pelicula.title}
                    className="pelicula-img"
                />
                <h3 className="pelicula-title">{pelicula.title}</h3>
                <p
                    className="toggle-descripcion"
                    onClick={() => this.verDescripcion()}
                >
                    {this.state.verDescripcion ? "Ocultar Descripción" : "Ver Descripción"}
                </p>
                {this.state.verDescripcion && (
                    <section className="descripcion-section">
                        <p>{pelicula.overview}</p>
                    </section>
                )}
                <a href={`/detail/${pelicula.id}`} className="detalle-link">
                     Detalle </a>
            </div>
        );
    }
}

export default CardPelicula;
