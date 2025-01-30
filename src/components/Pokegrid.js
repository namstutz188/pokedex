import '../styles/pokegrid.css';
import { Grid2 } from '@mui/material';
import { PokeBlock } from './Pokeblock.js';
import {useState, useEffect, useCallback} from 'react';
import { getPokemons } from '../api/pokeAPI.js';

//Retrieve Pokemon https://pokeapi.co/api/v2/{endpoint}/?limit=xx&offset=XX

//Need to take the url provided for each result to get more data on the pokemon to use
    //https://pokeapi.co/api/v2/pokemon/NUMBER/" - has sprites and type and generation (used for front end ui) (maybe too many calls -)

export function PokeGrid({filter}) {

    const [pokemons,setPokemons] = useState([]);

    useEffect(() => {
        getPokemons().then((json) => {
            setPokemons(json.results.map((p,i) => {
                return {
                    name: p.name,
                    id: i + 1
                };
            }));   //Just getting an array of all pokemon names
        });
    },[]);

    console.log(pokemons);

    //displayPokemon is a filtered pokemons array used for displaying what is filtered on w/o removing what we had

    let displayPokemon;

    if(filter !== "") {
        displayPokemon = pokemons.filter((pokemon) => {
            return pokemon.name.includes(filter.toLowerCase()) || pokemon.id === Number(filter);
        })
    } else {
        displayPokemon = pokemons;
    }

    return  <Grid2 container rowSpacing = {1} columnSpacing = {1} justifyContent= 'center' alignItems = 'center'>
                {
                    displayPokemon.map((p,i) => {
                        return  <Grid2 className = "pokeblock" size = {2} index ={i}>
                                    <PokeBlock pokemon = {p.name} number = {p.id} ></PokeBlock>
                                </Grid2>
                    })
                }
            </Grid2>
}