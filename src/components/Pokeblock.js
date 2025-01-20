import {useState, useEffect, useCallback} from 'react';

export function PokeBlock({pokemon}) {

    const pokemonData = useState({});

    //API CALL TO GET POKEMON DATA
    //Need to take the url provided for each result to get more data on the pokemon to use
    //https://pokeapi.co/api/v2/pokemon/NUMBER/" - has sprites and type and generation (used for front end ui)

    return <>{pokemon.name}</>;
}