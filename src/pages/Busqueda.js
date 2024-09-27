import { Component } from "react";

import Peliculas from "../components/Peliculas/Peliculas";


class Busqueda extends Component {
    constructor(props) {
        super(props);
        this.state = {
            pelis: [],
            cargando: true,
        };
    }

    componentDidMount() {
        const query = this.props.location.state.query;

        fetch(`https://api.themoviedb.org/3/search/movie?query=${query}`, 
            {
                headers: {
                    'Accept': 'application/json',
                    'Authorization': `Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIzYzc2ZDIwMzMyMGZjMzQzZDAwMGU1OGVmODVkN2Y2NSIsIm5iZiI6MTcyNzE4NTAxNS4zMTI3NTksInN1YiI6IjY1NGQxOTMyYjE4ZjMyMDBmZmVjZDRjNSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.Ah_71jyFfszrnPZ94x8bjVsYQSHGCAg2JuI9r3iNb8w`
                }
            }
        )
            .then((response) => {
                if (!response.ok) {
                    throw new Error("Error en la respuesta de la API");
                }
                return response.json();
            })
            .then((data) => {
                this.setState({
                    pelis: data.results,
                    cargando: false,
                });
            })
            .catch((e) => console.log(e));
    }
    

    render() {
        return (
            <>
            {/*ESTO ES PARA FORM BUSQUEDA*/}
            <p>{this.props.location.state.query}</p>

            {/*ESTO ES PARA CARGANDO*/}
                {!this.state.cargando ? (
                    <Peliculas movies={this.state.pelis} />
                ) : (
                    <p>Cargando...</p>
                    
                )}
            </>
        );
    }
}

export default Busqueda;
