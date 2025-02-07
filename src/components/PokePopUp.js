import {useState, useEffect} from 'react';
import { getPokemonData } from '../api/pokeAPI';
import { Box } from '@mui/system';

export default function PokePopUp({pokemon, number}) {

    const [pokemonData, setPokemonData] = useState({});
    const [pokemonFrontSprite, setPokemonFrontSprite] = useState('');
    const [pokemonBackSprite, setPokemonBackSprite] = useState('');

    //Instead of keeping everything, just keep what I want like doing for the front sprite and back sprite

    //Get data and pass into a Table or a List compoenent from Material UI
    //Create a new component of mine to put all of this in its own file - do next time but try and use Material UI stuff

    useEffect(() => {
        getPokemonData(pokemon).then((json) => {
            setPokemonData({
                height: json.height,
                weight: json.weight,
                sprites: json.sprites,
                types: json.types,
                stats: json.stats
            });
            setPokemonFrontSprite(json.sprites.front_default);
            setPokemonBackSprite(json.sprites.back_default);
        })
    },[]);

    //console.log(pokemonData);

    const boxStyle = {
        position: 'absolute',
        top: '50vh',
        left: '50vw',
        width: '25vw',
        height: '25vh',
        transform: 'translate(-50%,-50%)',
        border: '3px solid #000',
        bgcolor: 'white',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center'
    };

    return  <Box sx= {boxStyle}>
                {
                    pokemonFrontSprite !== '' &&
                    <Box
                        component = 'img'
                        alt = {`${pokemon} front image`}
                        src = {pokemonFrontSprite}
                    />
                }
                {
                    pokemonBackSprite !== '' &&
                    <Box
                        component = 'img'
                        alt = {`${pokemon} back image`} 
                        src = {pokemonBackSprite}
                    />
                }
                <div>
                    {`#${number} - ${pokemon}`}
                </div>
            </Box>
}