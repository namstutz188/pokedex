import { Grid2 } from '@mui/material';
import { PokeBlock } from './Pokeblock.js';
import {useState, useEffect, useCallback} from 'react';

//Get list of all pokemon here

//Map the array to a list of Grids to pass into Grid container - have the sub grids wrap pokecard

//Retrieve Pokemon https://pokeapi.co/api/v2/{endpoint}/?limit=xx&offset=XX

//Need to take the url provided for each result to get more data on the pokemon to use
    //https://pokeapi.co/api/v2/pokemon/NUMBER/" - has sprites and type and generation (used for front end ui)

export function PokeGrid() {

    const [pokemons,setPokemons] = useState([]);

    async function getPokemons() {

        //First get count of all Pokemon to get all the pokemon in our call

        const domain = "https://pokeapi.co/";
        const endpoint = "api/v2/pokemon/";
        const limitCount = "?limit=1"

        const urlCount = domain + endpoint + limitCount;

        const responseCount = await fetch(urlCount);
        const jsonCount = await responseCount.json();
        
        const pokemonCount = jsonCount.count;

        //Use pokemon count in limit for next call

        const limitAll = `?limit=${pokemonCount}`;
        const urlAll = domain + endpoint + limitAll;

        const responseAll = await fetch(urlAll);
        const jsonAll = await responseAll.json();

        setPokemons(jsonAll.results);

    }

    useEffect(() => {
        getPokemons();
    },[]);

    console.log(pokemons);

    return  <Grid2 container rowSpacing = {1} columnSpacing = {1} justifyContent= 'center' alignItems = 'center'>
                {
                    pokemons.map((p,i) => {
                        return  <Grid2 size = {2} index ={i}>
                                    <PokeBlock pokemon = {p}></PokeBlock>
                                </Grid2>
                    })
                }
            </Grid2>
}