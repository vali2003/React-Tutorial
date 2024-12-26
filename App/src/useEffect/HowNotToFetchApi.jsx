import { useState, useEffect } from "react";
import "./Fetch.css";
export const HowNotFetchApi = () => {
  const [pokemon, setData] = useState(null);
  const API = "https://pokeapi.co/api/v2/pokemon/squirtle";
  const fetchPokemon = () =>{
    fetch(API)
    .then((res) => res.json())
    .then((data) => setData(data))
    .catch((error) => console.log(error));
  }
  useEffect(() => {
      fetchPokemon()
  }, []); 
console.log(pokemon);
if(!pokemon)
    return(
<div>
    <h1>Loading....</h1>
</div>
    );
  return (
   <section className="container">
    <header>
        <h1>Lets Catch Pokemon</h1>
    </header>
    <ul className="card-demo">
        <li className="pokemon-card">
        <figure>
                <img
                  src={pokemon.sprites.other.dream_world.front_default}
                  alt={pokemon.name}
                  className="pokemon-image"
                />
              </figure>
              <h1>{pokemon.name}</h1>
        </li>
    </ul>
   </section>
  );
};
