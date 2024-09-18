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
        fetch(`⁠ https://api.themoviedb.org/3/search/movie?api_key=9458a99baf5a9ba3fe341cd43217ef95=${query}`)
            .then((response) => response.json())
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