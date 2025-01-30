import '../styles/pokeblock.css';
import {Box, Modal, Container} from '@mui/material';
import {useState, useEffect, useCallback} from 'react';

export function PokeBlock({pokemon, number}) {

    const pokemonData = useState({});

    const pokemonName = pokemon.charAt(0).toUpperCase() + pokemon.slice(1);

    const [open, setOpen] = useState(false);

    //API CALL TO GET POKEMON DATA
    //Need to take the url provided for each result to get more data on the pokemon to use
    //https://pokeapi.co/api/v2/pokemon/NUMBER/" - has sprites and type and generation (used for front end ui) - can prob also use name???

    //Using a Container with styling, an onClick to handleOpen of a modal, then onClose for modal to close

    const handleOpen = () => setOpen(true);

    const handleClose = () => setOpen(false);

    const boxStyle = {
        position: 'absolute',
        top: '50vh',
        left: '50vw',
        width: '25vw',
        height: '25vh',
        transform: 'translate(-50%,-50%)',
        border: '3px solid #000',
        bgcolor: 'background.paper',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center'
    };

    return  <>
                <Container sx= {
                    {
                        height: '100%',
                        width: '100%',
                        display: 'flex',
                        justifyContent: 'center',
                        alignItems: 'center',
                        cursor: 'pointer'
                    }
                }
                    onClick = {handleOpen}
                >
                    <div className = "number">
                        {'# ' + number}
                    </div>
                    <div className = "name">
                        {pokemonName}
                    </div>
                </Container>
                <Modal 
                    open = {open}
                    onClose = {handleClose}
                >
                    <Box sx = {boxStyle}>
                        <div>
                            {`#${number} - ${pokemonName}`}
                        </div>
                    </Box>
                </Modal>
            </>
}