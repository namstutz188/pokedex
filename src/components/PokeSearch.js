import TextField from "@mui/material/TextField";
import '../styles/pokesearch.css';

export default function PokeSearch({criteria, setSearch}) {

    return <div className = "searchbar">
        <TextField className = "textfieldsearch" type="search" label="Filter by Name or Number" id="filled-search" value = {criteria} onChange = {(e) => setSearch(e.target.value)}/>
    </div>
    
}