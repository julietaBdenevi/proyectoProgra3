import React, {Component} from "react";

class PeliculaCardPopular extends Component{
    constructor() {
        super();
        this.state = {
            descripcion: null
        }};

    //mostrarDescripcion(){
        //this.setState(){
        //    descripcion 
      //  }
    //};

    render(){
        const {pelicula} = this.props;
        return(
            <>
            <img src={`https://image.tmdb.org/t/p/w500${pelicula.poster_path}`}
          alt={pelicula.title}
        />
        <h1>{pelicula.title}</h1>
        
        </>
        )
    };
    

}

export default PeliculaCardPopular