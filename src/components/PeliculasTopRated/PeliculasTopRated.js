import React, {Component} from "react";
import TopRatedCard from '../TopRatedCard/TopRatedCard';



const API_KEY = "9458a99baf5a9ba3fe341cd43217ef95";
const peliculasTopRated = `https://api.themoviedb.org/3/movie/top_rated?api_key=${API_KEY}`;

class PeliculasTopRated extends Component{
    constructor() {
        super();
        this.state = {
            topRate: [],
            verMas: 1,
            textoBoton: "Ver más",
           
        };
    }
    
    handleVerMas(){
        this.setState({
            verMas: !this.state.verMas // lógica: si es true, muestra todas las pelis. Si es false, solo 5. 
        })
    }
    componentDidMount(){
        fetch(peliculasTopRated)
        .then(response => response.json())
        .then(data => {this.setState(
            { topRate: data.results}
        )})
        .catch((error) => console.log(error));
    }
    render(){

        const {topRate, verMas} = this.state;
        const masPelis = verMas ? topRate: topRate.slice(0,5);

        return(
            <section className="card-container">
                    <h2>Películas Top Rated</h2>
                <div>
                    {masPelis.length > 0 ? (
                        masPelis.map((pelicula) => (
                            <TopRatedCard
                                key={pelicula.id}
                                pelicula={pelicula}
                            />
                        ))
                    ) : (
                        <p>No hay películas top rated disponibles.</p> 
                    )}
                </div>
                <button onClick={() => this.handleVerMas()}> {verMas ? 'Ver menos' : 'Ver más'} </button>
                
            </section>
        )
    }

}
export default PeliculasTopRated
