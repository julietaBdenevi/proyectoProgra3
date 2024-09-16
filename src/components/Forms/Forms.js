import { Component } from "react";
import "./Form.css"
class Formulario extends Component{
    constructor(props){
        super(props);
        this.state = {valor:""};
    }

    evitarSubmit(event){
        event.preventDefault();
    }

    controlarCambios(event){
        this.setState({valor: event.target.value});
    }

    render(){
        return(
            <form onSubmit={(event)=> this.evitarSubmit(event)}>
                <label>Name:</label> {/*A chequear que ponemos en el label --> Es una busqueda, algo como nombre pelicula?*/}
                <input type="text" onChange={(event) => this.controlarCambios(event)} value={this.state.valor}/>
                <button type="submit"> Buscar </button>
            </form>
        )
    }

}
export default Formulario;