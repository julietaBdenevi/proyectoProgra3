import { Component } from "react";


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
        this.props.history.push('/busqueda',{query: this.state.query});
    }

    render() {
        return (
            <div>
                <form onSubmit={(e) => this.handleCancelSubmit(e)}>
                    <input
                        name="query"
                        onChange={(e) => this.handleFormChange(e)}
                        value={this.state.query}
                    />
                    <button type="button" onClick={() => this.handleFormSubmit()}>
                        Search
                    </button>
                </form>
            </div>
        );
    }
}

export default Form;