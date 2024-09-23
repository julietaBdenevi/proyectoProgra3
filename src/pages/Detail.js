import React from "react";
import MovieDetail from "../components/MovieDetail/MovieDetail";

const Detalle = ({ match }) => {
    const id = match.params.id;
  
    return (
        <section>
          <article>
            <div>
              <MovieDetail id={id} />
            </div>
          </article>
        </section>
    );
  };
  
  export default Detalle;
  