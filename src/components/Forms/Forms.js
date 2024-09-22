import { Component } from "react";
import "./Form.css";  // Asegúrate de que el archivo Forms.css esté importado

class Form extends Component {
    constructor(props) {
        super(props);
        this.state = {
            query: "",
        };
    }

    handleCancelSubmit(e) {
        e.preventDefault();
    }

    handleFormChange(e) {
        this.setState({
            query: e.target.value,
        });
    }

    handleFormSubmit() {
        this.props.history.push('/busqueda', { query: this.state.query });
    }

    render() {
        return (
            <div className="form-container">
                <form onSubmit={(e) => this.handleCancelSubmit(e)}>
                    <input
                        name="query"
                        onChange={(e) => this.handleFormChange(e)}
                        value={this.state.query}
                        className="form-input"
                    />
                    <button type="button" onClick={() => this.handleFormSubmit()} className="form-button">
                        Search
                    </button>
                </form>
            </div>
        );
    }
}

export default Form;
