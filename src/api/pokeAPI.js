export async function getPokemons() {
    const domain = "https://pokeapi.co/";
    const endpoint = "api/v2/pokemon/";
    const limitCount = "?limit=1";

    const urlCount = domain + endpoint + limitCount;

    const responseCount = await fetch(urlCount);
    const jsonCount = await responseCount.json();
        
    //const pokemonCount = jsonCount.count;

    //Use pokemon count in limit for next call

    //TEMP: Only pull back 151 while testing

    /*
    const limitAll = `?limit=${pokemonCount}`;
    const urlAll = domain + endpoint + limitAll;
    */
    const limitTemp = '?limit=151';
    const urlAll = domain + endpoint + limitTemp;
    const responseAll = await fetch(urlAll);
    const jsonAll = await responseAll.json();

    return jsonAll;
}

//Get specific Pokemon Data

export async function getPokemonData(pokemon) {
    const domain = "https://pokeapi.co/";
    const endpoint = "api/v2/pokemon/";

    const url = domain + endpoint + pokemon;

    const response = await fetch(url);
    const json = await response.json();
    return json;
}