
import CardPelicula from '../CardPelicula/CardPelicula'

const PeliculaCardPopular = ({movies}) => {

    console.log("Movies:", movies);
    return (
      <>
        <div className='container'>{movies.map(movie => <p key={movie.id}>{movie.title}</p>)}</div>
         {/* SI DEJO AS´I ROMPE,  <div className='container'>{movies.map(movie => <div> <CardPelicula pelicula={movie} /> </div>)}</div> */}
      </>
    )
  }
  
  export default PeliculaCardPopular

// class PeliculaCardPopular extends Component{
//     constructor(props) {
//         super(props);
//         this.state = {
//             descripcion: null,  
//         }
//     };
   
//     render(){
//         const {pelicula} = this.props;
//         return(
//             <> 
//                 <h1>{pelicula.title}</h1>
//                 <img src={`https://image.tmdb.org/t/p/w500${pelicula.poster_path}`}
//                 alt={pelicula.title} />
                

               
                
        
//             </>
//         )
//     };


// }

// export default PeliculaCardPopular;