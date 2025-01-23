import '../styles/pokeblock.css';
import {useState, useEffect, useCallback} from 'react';

export function PokeBlock({pokemon, number}) {

    const pokemonData = useState({});

    const pokemonName = pokemon.charAt(0).toUpperCase() + pokemon.slice(1);

    //API CALL TO GET POKEMON DATA
    //Need to take the url provided for each result to get more data on the pokemon to use
    //https://pokeapi.co/api/v2/pokemon/NUMBER/" - has sprites and type and generation (used for front end ui)

    return <>
        <div className = "number">
            {'# ' + number}
        </div>
        <div className = "name">
            {pokemonName}
        </div>
        
    </>;
}