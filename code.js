//Display one pokemon name

//identify our div
const pokemonDiv = document.querySelector(".pokemon");
//create a base url
const POKE_URL = "https://pokeapi.co/api/v2/pokemon/";


const printPokemonName = function(name){
    let h2 = document.createElement("h2")
        h2.innerHTML = name;
        pokemonDiv.append(h2);
}

const displayPokemonPicture = function(picture){
    let img = document.createElement("img");
    img.src = picture;
    pokemonDiv.append(img);
}

//start the fetch
const fetchPokemon = function(name){
    fetch(`${POKE_URL}${name}`)
        // get data back and translate to usable JSON object
        .then(response => response.json())

        //actually work with the data
        .then(data => {
            //console.log(data)
            printPokemonName(data.name);
            displayPokemonPicture(data.sprites.front_default);
        })
}

const fetch149Pokemon = function() {
    let pokemonURL = `${POKE_URL}?limit=149`
    fetch(pokemonURL)
        .then(response => response.json())
        .then(data => {
            data.results.forEach(pokemon => {
                fetchPokemon(pokemon.name);
            });
        })
}

fetch149Pokemon();