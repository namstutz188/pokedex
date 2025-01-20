import logo from './logo.svg';
import './App.css';
import'./components/Pokegrid.js'
import { PokeGrid } from './components/Pokegrid.js';

//For now just going to not use React Router

//Components we need: Want to use Material UI as much as possible
  //Main page
    //Web Logo
    //SearBar
    //Tabs
    //Pokemon block area (some sort of CSS grid kinda thing)
      //A single pokemon block - background dependent on primary type data

function App() {
  return (
    <div className="App">
      <PokeGrid></PokeGrid>
    </div>
  );
}

export default App;
