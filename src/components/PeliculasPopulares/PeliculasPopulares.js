import React, {Component} from "react";
import PeliculaCardPopular from "../PeliculaCardPopular/PeliculaCardPopular";




class PeliculasPopulares extends Component {
    constructor() {
        super();
        this.state = {
            movies: [],
            filteredMovies:[],
             filterValue: "",
             actualPage: 1,
            
            
        };
    }
   
    componentDidMount() {
        fetch( `https://api.themoviedb.org/3/movie/top_rated?language=en-US&page=${this.state.actualPage}`, {
            headers: {
                'Accept': 'application/json',
                'Authorization': `Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIzYzc2ZDIwMzMyMGZjMzQzZDAwMGU1OGVmODVkN2Y2NSIsIm5iZiI6MTcyNzE4NTAxNS4zMTI3NTksInN1YiI6IjY1NGQxOTMyYjE4ZjMyMDBmZmVjZDRjNSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.Ah_71jyFfszrnPZ94x8bjVsYQSHGCAg2JuI9r3iNb8w`
            }
        })

            .then(response => response.json())
            .then(data => {this.setState(
                { movies: data.results,
                    filteredMovies: data.results,
                    actualPage: this.state.actualPage + 1
                 } 
            )})
            .catch((error) => console.log(error));

        
    }
    handleFilter(e){
        const userValue = e.target.value;
        this.setState({
            filterValue: userValue,
            filteredMovies: this.state.movies.filter((movie) =>
                movie.title.toLowerCase().includes(userValue.toLowerCase()))
        })
    }

    handleLoadMore(){
        fetch(`https://api.themoviedb.org/3/movie/top_rated?page=${this.state.actualPage}`, {
            headers: {
                'Accept': 'application/json',
                'Authorization': `Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIzYzc2ZDIwMzMyMGZjMzQzZDAwMGU1OGVmODVkN2Y2NSIsIm5iZiI6MTcyNzE4NTAxNS4zMTI3NTksInN1YiI6IjY1NGQxOTMyYjE4ZjMyMDBmZmVjZDRjNSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.Ah_71jyFfszrnPZ94x8bjVsYQSHGCAg2JuI9r3iNb8w`
            }
        })
        .then(response => response.json())
        .then(data => this.setState({
            movies: this.state.movies.concat(data.results),
            filteredMovies: this.state.filteredMovies.concat(data.results),
            actualPage: this.state.actualPage + 1
            })
        )
        .catch((err) => console.log(err));
        
    }
    handleResetFilter(){
        this.setState({
            filterValue: '',
            filteredMovies: this.state.movies
        })
     }
    render() {

        return (
            <>
            <input 
                type='text'
                value={this.state.filterValue}
                onChange={(e) => this.handleFilter(e)} // cada evento(e) lo caputaros con
            />

            <button  onClick= {()=> this.handleResetFilter()}> ResetFilter </button>
           <PeliculaCardPopular  movies= {this.state.filteredMovies} />


           <button onClick= {()=> this.handleLoadMore()}> Cargar Más </button>

 
            </>
        )


    }
}


export default PeliculasPopulares;