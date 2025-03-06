export default function PokePopUpHeader({pokemon, pokeNumber}) {

    const pokemonName = pokemon.charAt(0).toUpperCase() + pokemon.slice(1);

    return  <div>
                {`#${pokeNumber} - ${pokemonName}`}
            </div>
}