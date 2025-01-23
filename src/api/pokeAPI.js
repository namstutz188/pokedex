export async function getPokemons() {
    const domain = "https://pokeapi.co/";
    const endpoint = "api/v2/pokemon/";
    const limitCount = "?limit=1";

    const urlCount = domain + endpoint + limitCount;

    const responseCount = await fetch(urlCount);
    const jsonCount = await responseCount.json();
        
    const pokemonCount = jsonCount.count;

    //Use pokemon count in limit for next call

    const limitAll = `?limit=${pokemonCount}`;
    const urlAll = domain + endpoint + limitAll;

    const responseAll = await fetch(urlAll);
    const jsonAll = await responseAll.json();

    return jsonAll;
}