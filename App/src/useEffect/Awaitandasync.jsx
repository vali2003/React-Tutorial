import { useState, useEffect } from "react";
import "./Loading.css";
export const Loading = () => {
  const [pokemon, setData] = useState(null);
  const [Loading, setLoading] = useState(true);
  const [error, setError] = useState("");
  const API = "https://pokeapi.co/api/v2/pokemon/squirtle";
const fetchPokemon = async () => {
    try{
   const res =  await fetch(API);
   const data = await res.json();
   setData(data);
   setLoading(false);
    }catch(error){
        console.log(error)
        setLoading(false);
        setError(error);
    }
}


  useEffect(() => {
      fetchPokemon()
  }, []); 
console.log(pokemon);
if(Loading)
    return(
<div>
    <h1>Loading....</h1>
</div>
    );
    if(error)
        return(
    <div>
        <h1>Error : {error.message}</h1>
    </div>
        )
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
              <div className="grid-three-cols">
                <p className="pokemon-info">
                    Height : <span>{pokemon.height}</span>
                </p>
                <p className="pokemon-info">
                    Weight : <span>{pokemon.weight}</span>
                </p>
                <p className="pokemon-info">
                    speed : <span>{pokemon.stats[5].base_stat}</span>
                </p>
              </div>
        </li>
    </ul>
   </section>
  );
};
