/*Mirar ejercicios de la clase 6bis --> Vicky*/
import React, { Component } from "react";

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
        })
    }

    render() {
        const { pelicula} = this.props;
        return (
            <>
                <img src={`https://image.tmdb.org/t/p/w500${pelicula.poster_path}`}
                    alt={pelicula.title}
                />
                <h1>{pelicula.title}</h1>
                <p onClick={() => this.verDescripcion()}>
                    {this.state.verDescripcion ? "Ocultar Descripción" : "Ver Descripción"}
                </p>
                {this.state.verDescripcion && (
                    <section>
                        <p>{pelicula.overview} </p>
                    </section>
                )}
                <a href={`/detalle/id/${pelicula.id}`}>Detalle</a> {/*cambiar a ruta correspondiente*/}

                
            </>
        )
    };


}

export default CardPelicula;