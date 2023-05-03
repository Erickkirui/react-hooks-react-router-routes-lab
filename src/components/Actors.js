import React from "react";
import { actors } from "../data";

function Actors() {
  const displayActors = actors.map((actor) => (
    <div key ={actor.name}>
      <p>Name :{actor.name}</p>
      <p>Movies :{actor.movies}</p>

    </div>
  ))

  return <div>
   <h1>Actors</h1>
   <div>{displayActors}</div> 
  </div>;
}

export default Actors;
