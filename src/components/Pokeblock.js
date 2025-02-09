import '../styles/pokeblock.css';
import {Modal, Container} from '@mui/material';
import {useState} from 'react';
import PokePopUp from './PokePopUp';

export default function PokeBlock({pokemon, number}) {

    const pokemonName = pokemon.charAt(0).toUpperCase() + pokemon.slice(1);

    const [open, setOpen] = useState(false);

    //Using a Container with styling, an onClick to handleOpen of a modal, then onClose for modal to close. Modal now just renders PokePopUp prop

    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);

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
                    <PokePopUp pokemon = {pokemonName} number = {number} />  
                </Modal>
            </>
}