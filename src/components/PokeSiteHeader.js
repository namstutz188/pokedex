import { Paper, Box, FormControlLabel, Switch,Grid2 } from "@mui/material"
import { ThemeContext }  from '../context/ThemeContext.js';
import { useContext } from "react";

export default function PokeSiteHeader() {

    const {theme, toggleTheme} = useContext(ThemeContext);

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
    };

    return  <Grid2 container rowSpacing = {1} columnSpacing = {1} justifyContent= 'center' alignItems = 'center'>
                <Grid2 size = {6} index ={1}>
                    <Box className = 'logoContainer' sx = {boxStyle}>
                        <Box
                            component = 'img'
                            alt = 'PokedexLite Logo'
                            src = '../../pokedexlitelogo.png'
                            sx = {{height: '100%', width: 'auto'}}
                        />
                        <Paper sx = {paperStyle}>
                            PokéLite
                        </Paper>
                    </Box>
                </Grid2>
                
                <Grid2 size = {6} index ={2} display = 'flex' justifyContent = 'flex-end'>
                    <FormControlLabel control = {<Switch onChange = {toggleTheme} checked = {theme === "dark"} />} label = "Dark Mode" />
                </Grid2>            
            </Grid2>
}