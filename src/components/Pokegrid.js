import '../styles/pokegrid.css';
import { Grid2 } from '@mui/material';
import { PokeBlock } from './Pokeblock.js';
import {useState, useEffect, useCallback} from 'react';
import { getPokemons } from '../api/pokeAPI.js';

//Get list of all pokemon here

//Map the array to a list of Grids to pass into Grid container - have the sub grids wrap pokecard

//Retrieve Pokemon https://pokeapi.co/api/v2/{endpoint}/?limit=xx&offset=XX

//Need to take the url provided for each result to get more data on the pokemon to use
    //https://pokeapi.co/api/v2/pokemon/NUMBER/" - has sprites and type and generation (used for front end ui)

export function PokeGrid({filter}) {

    const [pokemons,setPokemons] = useState([]);

    useEffect(() => {
        getPokemons().then((json) => {
            setPokemons(json.results.map((p) => p.name));   //Just getting an array of all pokemon names
        });
    },[]);

    console.log(pokemons);

    //displayPokemon is a filtered pokemons array used for displaying what is filtered on w/o removing what we had

    let displayPokemon;

    if(filter !== "") {
        displayPokemon = pokemons.filter((pokemon,i) => {
            return pokemon.includes(filter.toLowerCase()) || i + 1 === Number(filter);
        })
    } else {
        displayPokemon = pokemons;
    }

    return  <Grid2 container rowSpacing = {1} columnSpacing = {1} justifyContent= 'center' alignItems = 'center'>
                {
                    displayPokemon.map((p,i) => {
                        return  <Grid2 className = "pokeblock" size = {2} index ={i}>
                                    <PokeBlock pokemon = {p} number = {pokemons.indexOf(p) + 1} ></PokeBlock>
                                </Grid2>
                    })
                }
            </Grid2>
}