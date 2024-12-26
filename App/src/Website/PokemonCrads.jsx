import "./index.css";

export const PokemonCards = ({ pokemonData }) => {
  return (
    <li className="pokemon-card">
      <figure>
        <img
          src={pokemonData.sprites.other.dream_world.front_default}
          alt={pokemonData.name}
          className="pokemon-image"
        />
      </figure>
      <h2>{pokemonData.name}</h2>
      
      <div className="pokemon-info pokemon-highlight">
        <p>{pokemonData.types.map((curType) => curType.type.name).join(", ")}</p>
      </div>

      <div className="grid-three-cols">
        <p className="pokemon-info">Height: <span>{pokemonData.height}</span></p>
        <p className="pokemon-info">Weight: <span>{pokemonData.weight}</span></p>
        <p>Speed: <span>{pokemonData.stats[5]?.base_stat}</span></p>
      </div>

      <div className="pokemon-info">
        <p> 
                        <span>Experience:</span>
                        {pokemonData.base_experience}

            </p>
        </div>
        <div className="pokemon-info">

        <p className="pokemon-info"> 
            <span>Attack:</span>
            {pokemonData.stats[1]?.base_stat}
            </p>
        </div>
        <div className="pokemon-info">

        <p>
          <span>Abilities:</span>
          {pokemonData.abilities.map((abilityInfo) => abilityInfo.ability.name).slice(0, 1).join(", ")} 
        </p>
      </div>
    </li>
  );
};
