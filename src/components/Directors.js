import React from "react";
import { directors } from "../data";

function Directors() {
  const displayDirectors = directors.map((director) => (
    <div key ={director.name}>
      <p>Name :{director.name}</p>
      <p>Movies :{director.movies}</p>

    </div>
  ))

  return <div>
   <h1>Directors</h1>
   <div>{displayDirectors}</div> 
  </div>;
}

export default Directors;
