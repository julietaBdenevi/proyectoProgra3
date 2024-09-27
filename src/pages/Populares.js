import React, { Component } from "react";

import PeliculaCardPopular from "../components/PeliculaCardPopular/PeliculaCardPopular";

const url = "https://api.themoviedb.org/3/movie/popular?language=en-US&api_key=31e421d77201e7a1eefe33f85b67fa3b&page="

class Populares extends Component {
  constructor(props) {
    super(props);
    this.state = {
      movies: [],
      filteredMovies: [],
      filterValue: "",
      actualPage: 1
    };
  }

  componentDidMount() {
    fetch(
      `${url}${this.state.actualPage}`
    )
      .then((response) => response.json())
      .then((data) =>
        this.setState({
          movies: data.results,
          filteredMovies: data.results,
          actualPage: this.state.actualPage + 1
        })
      )
      .catch((err) => console.log(err));
  }

  handleFilter(e) {
    const userValue = e.target.value;
    this.setState({
      filterValue: userValue,
      filteredMovies: this.state.movies.filter((movie) =>
        movie.title.toLowerCase().includes(userValue.toLowerCase())
      ),
    });
  }

  handleResetFilter(){
    this.setState({
        filterValue:"",
        filteredMovies: this.state.movies,
    })
  }

  handleLoadMore(){
    fetch( `${url}${this.state.actualPage}`)
    .then((response) => response.json())
    .then((data) =>
      this.setState({
        movies: this.state.movies.concat(data.results),
        filteredMovies: this.state.filteredMovies.concat(data.results),
        actualPage: this.state.actualPage + 1
      })
    )
    .catch((err) => console.log(err));
  }
  render() {
    return (
      <>
        <input
          type="text"
          value={this.state.filterValue}
          onChange={(e) => this.handleFilter(e)}
        />
        <button onClick={()=> this.handleResetFilter()}> Reset Filter </button>
        <PeliculaCardPopular movies={this.state.filteredMovies} />

        <button onClick={()=> this.handleLoadMore()}>  Cargar Mas </button>
      </>
    );
  }
}

export default Populares;
