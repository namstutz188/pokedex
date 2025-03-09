import '../styles/pokesiteheader.css';
import { Paper, Box, FormControlLabel, Switch,Grid2 } from "@mui/material"
import { ThemeContext }  from '../context/ThemeContext.js';
import { useContext } from "react";

export default function PokeSiteHeader() {

    const {theme, toggleTheme} = useContext(ThemeContext);

    return  <Grid2 container rowSpacing = {1} columnSpacing = {1} justifyContent= 'center' alignItems = 'center'>
                <Grid2 size = {8} index ={1}>
                    <Box className = 'pokelogo'>
                        <Box
                            component = 'img'
                            alt = 'PokedexLite Logo'
                            src = '../../pokedexlitelogo.png'
                            sx = {{height: '100%', width: 'auto'}}
                        />
                        <Paper elevation={8} className = 'pokelite'>
                            PokéLite
                        </Paper>
                    </Box>
                </Grid2>
                
                <Grid2 size = {4} index ={2} className = 'darkModeButtonBox'>
                    <FormControlLabel className = 'darkModeButton' control = {<Switch onChange = {toggleTheme} checked = {theme === "dark"} />} label = {<span className = 'darkModeLabel'>Dark Mode</span>} />
                </Grid2>            
            </Grid2>
}