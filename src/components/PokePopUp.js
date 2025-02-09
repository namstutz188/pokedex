import {useState, useEffect} from 'react';
import { getPokemonData } from '../api/pokeAPI';
import { Box } from '@mui/system';
import { Grid2 } from '@mui/material';
import PokePopUpSprite from './PokePopUpSprite';
import PokePopUpHeader from './PokePopUpHeader';
import PokePopUpTable from './PokePopUpTable';

export default function PokePopUp({pokemon, number}) {

    const [pokemonData, setPokemonData] = useState([]);
    const [pokemonFrontSprite, setPokemonFrontSprite] = useState('');
    const [pokemonBackSprite, setPokemonBackSprite] = useState('');

    //Instead of keeping everything, just keep what I want like doing for the front sprite and back sprite

    //Get data and pass into a Table or a List compoenent from Material UI
    //Create a new component of mine to put all of this in its own file - do next time but try and use Material UI stuff

    useEffect(() => {
        getPokemonData(pokemon).then((json) => {

            //Capture data (put in own function eventually in own file and import in)

            const pokemonData = [];
            //Height Property
            pokemonData.push({key: 'Height', value: json.height});
            //Weight
            pokemonData.push({key: 'Weight', value: json.weight});
            //Type One
            const typeOneName = json.types[0].type.name
            const typeOneFormat = typeOneName.charAt(0).toUpperCase() + typeOneName.slice(1)
            pokemonData.push({key: 'Type 1', value: typeOneFormat});
            //Type Two - if Exists
            if(json.types.length > 1) {
                const typeTwoName = json.types[1].type.name
                const typeTwoFormat = typeTwoName.charAt(0).toUpperCase() + typeTwoName.slice(1)
                pokemonData.push({key: 'Type 2', value: typeTwoFormat});
            }

            setPokemonData(pokemonData);
            setPokemonFrontSprite(json.sprites.front_default);
            setPokemonBackSprite(json.sprites.back_default);
        })
    },[]);

    const boxStyle = {
        position: 'fixed',
        top: '50vh',
        left: '50vw',
        width: '25vw',

        transform: 'translate(-50%,-50%)',
        border: '3px solid #000',
        bgcolor: 'white',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center'
    };

    const flexCenter = {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center'
    }

    return  <Box sx= {boxStyle}>

                <Grid2 container spacing = {1} justifyContent = 'center' alignItems= 'center'>

                    <Grid2 size = {12} sx = {flexCenter}>
                        <PokePopUpSprite frontSprite = {pokemonFrontSprite} backSprite = {pokemonBackSprite} pokemon = {pokemon} />
                    </Grid2>

                    <Grid2 size = {12} sx = {flexCenter}>
                        <PokePopUpHeader pokemon = {pokemon} pokeNumber = {number} />
                    </Grid2>

                    <Grid2 size = {12}>
                        <PokePopUpTable data = {pokemonData} />
                    </Grid2>

                </Grid2>
                    
            </Box>
}