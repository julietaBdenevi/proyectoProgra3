import React, {Component} from "react";
import PeliculaCardPopular from "../PeliculaCardPopular/PeliculaCardPopular";

const API_KEY = "9458a99baf5a9ba3fe341cd43217ef95";
const peliculasPopulares = `https://api.themoviedb.org/3/movie/popular?api_key=${API_KEY}`;


class PeliculasPopulares extends Component {
    constructor() {
        super();
        this.state = {
            populares: [],
            verMas: false,
            textoBoton: "ver mas"
            
        };
    }
    handleVerMas(){
        this.setState({
            verMas: !this.state.verMas // lógica: si es true, muestra todas las pelis. Si es false, solo 5. 
        })
    }
    componentDidMount() {
        fetch(peliculasPopulares)
            .then(response => response.json())
            .then(data => {this.setState(
                { populares: data.results } 
            )})
            .catch((error) => console.log(error));

        
    }
    render() {

        const {populares, verMas} = this.state;
        const masPelis = verMas ? populares: populares.slice(0,5); // si verMas es true, muestra el array completo, sino, solo 5. 
        return (
            <>
                <section className="card-container">
                    <h2>Películas Populares</h2>
                <div> 
                    {masPelis.length > 0 ? (
                        masPelis.map((pelicula) => (
                            <PeliculaCardPopular
                                key={pelicula.id}
                                pelicula={pelicula}
                            />
                        ))
                    ) : (
                        <p>No hay películas populares disponibles.</p> // En caso de que no haya datos
                    )}
                </div>
                <button onClick={() => this.handleVerMas()}> {verMas ? 'ver menos' : 'ver más'} </button>
                
            </section>

           
            </>

        )
    }
}


export default PeliculasPopulares;