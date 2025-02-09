import { Paper, Box } from "@mui/material"

export default function PokeSiteHeader() {

    const boxStyle = {
        display: 'flex',
        justifyContent: 'flex-start',
        alignItems: 'center',
        height: '6rem'
    };

    const paperStyle = {
        padding: '0.25rem',
        textAlign:'center',
        fontSize: '4rem',
        elevation: 8
    }

    return  <Box className = 'logoContainer' sx = {boxStyle}>
                <Box
                    component = 'img'
                    alt = 'PokedexLite Logo'
                    src = '../../pokedexlitelogo.png'
                    sx = {{height: '100%', width: 'auto'}}
                />
                <Paper sx = {paperStyle}>
                    PokédexLite
                </Paper>
                
            </Box>
}