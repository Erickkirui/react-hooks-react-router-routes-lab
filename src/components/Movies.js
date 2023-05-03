import React from "react";
import { movies } from "../data";

function Movies() {

  const displayMovies = movies.map((movie) => (
    <div key ={movie.title}>
      <h1>{movie.title}</h1>
      <p>time :{movie.time}</p>
      <p>Genre :{movie.genres}</p>

    </div>
  ))

  return <div>
   <h1>All Movies</h1>
   <div>{displayMovies}</div> 
  </div>;
}

export default Movies;
