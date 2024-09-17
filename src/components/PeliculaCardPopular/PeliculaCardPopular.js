import React, {Component} from "react";

class PeliculaCardPopular extends Component{
    constructor() {
        super();
        this.state = {
            descripcion: null,
            
        }
    };
   
    render(){
        const {pelicula} = this.props;
        return(
            <> 
                <h1>{pelicula.title}</h1>
                <img src={`https://image.tmdb.org/t/p/w500${pelicula.poster_path}`}
                alt={pelicula.title} />
                

               
                
        
            </>
        )
    };


}

export default PeliculaCardPopular;