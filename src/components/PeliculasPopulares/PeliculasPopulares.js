import React from 'react'; 
import { Component } from 'react';
import PeliculaCardPopular from '../PeliculaCardPopular/PeliculaCardPopular';

const API_KEY = "9458a99baf5a9ba3fe341cd43217ef95";
const peliculasPopulares = `https://api.themoviedb.org/3/movie/popular?api_key=${API_KEY}`;

class PeliculasPopulares extends Component{
    constructor(){
        super();
        this.state={
            pelis: []
        }
    }

    componentDidMount(){
        fetch(peliculasPopulares)
            .then(response => response.json())
            .then( data => this.setState({pelis: data.results}))
            .catch( e => console.log(e))
    }

    render(){
        console.log('ESTOY RENDERIZANDO');

      return(
        <>
        {this.state.pelis.length > 0 ? 
        this.state.pelis
        .filter((peli, idx) => idx < 5)
        .map((peli, idx) => (
            <PeliculaCardPopular peli={peli} key={idx} />
        ))
         : (<p> Cargando.. </p>)
        }
           
       
    
        </>
      )

        
    }


}

export default PeliculasPopulares;

