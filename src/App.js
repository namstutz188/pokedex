import './styles/App.css';
import'./components/Pokegrid.js'
import {useState} from 'react';
import PokeGrid from './components/Pokegrid.js';
import PokeSearch from './components/PokeSearch.js';

//For now just going to not use React Router

//Components we need: Want to use Material UI as much as possible
  //Main page
    //Web Logo
    //SearBar
    //Tabs
    //Pokemon block area (some sort of CSS grid kinda thing)
      //A single pokemon block
        //onClick pops up with a new component - TODO

function App() {

  const [searchCriteria, setSearchCriteria] = useState('');

  return (
    <div className="App">
      <PokeSearch criteria = {searchCriteria} setSearch = {setSearchCriteria}></PokeSearch>
      <PokeGrid filter = {searchCriteria}></PokeGrid>
    </div>
  );
}

export default App;
