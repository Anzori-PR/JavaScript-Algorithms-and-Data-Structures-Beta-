let search = document.getElementById('search-form');
let input = document.getElementById('search-input');
let searchBtn = document.getElementById('search-button');
// Pokemon faces
let Name = document.getElementById('pokemon-name');
let id = document.getElementById('pokemon-id');
let weight = document.getElementById('weight');
let height = document.getElementById('height');
let img = document.getElementById('img-container');
let types = document.getElementById('types');
// Stats
let hp = document.getElementById('hp');
let attack = document.getElementById('attack');
let defense = document.getElementById('defense');
let spAttack = document.getElementById('special-attack');
let spDefense = document.getElementById('special-defense');
let speed = document.getElementById('speed');



let jsonApi;
search.addEventListener('submit', async (event) => {
    event.preventDefault();
    const api = await fetch(`https://pokeapi-proxy.freecodecamp.rocks/api/pokemon/${input.value.toLowerCase()}`);

    if (api.status === 404) {
        alert("Pokémon not found");
    } else {
        jsonApi = await api.json();

        Name.innerText = jsonApi.name;
        id.innerText = `#${jsonApi.id}`;
        weight.innerHTML = `Weight: ${jsonApi.weight}`;
        height.innerHTML = `Height: ${jsonApi.height}`;
        img.innerHTML = `<img id="sprite" src="${jsonApi.sprites.front_default}" >`;

        let typeHtml = '';
        for (let i = 0; i < jsonApi.types.length; i++) {
            typeHtml += `<span>${jsonApi.types[i].type.name}</span>`;
        }
        types.innerHTML = typeHtml;

        // Sats
        hp.innerText = jsonApi.stats[0].base_stat;
        attack.innerText = jsonApi.stats[1].base_stat;
        defense.innerText = jsonApi.stats[2].base_stat;
        spAttack.innerText = jsonApi.stats[3].base_stat;
        spDefense.innerText = jsonApi.stats[4].base_stat;
        speed.innerText = jsonApi.stats[5].base_stat;
    }
})






