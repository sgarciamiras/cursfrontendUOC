const colorSwitch = document.querySelector('#switch input[type="checkbox"]');
//funció per canviar el color del tema
function cambiaTema(ev){
    if(ev.target.checked){
        document.documentElement.setAttribute('tema', 'light');
    } else {
        document.documentElement.setAttribute('tema', 'dark');
    }
}
colorSwitch.addEventListener('change', cambiaTema);

//funció per generar un número aleatori
function getRandomInt(max) {
    return Math.floor(Math.random() * max);
}

//funció per extraure informació del pokemon de la API
function fetchAPI(url,info,fotoPokemon) {
    fetch (url)
    .then(x => {
        console.dir(x);
        return x.json();
    })
    .then(y => {
        console.dir(y);
        document.getElementById(info).innerHTML = y.name;
        document.getElementById(fotoPokemon).setAttribute('src',y.sprites.front_default);
    })
}

//funció per crear una carta de pokemon
function crearPokemon(info, fotoPokemon,link) {
    let idPokemon=getRandomInt(maxPokemonAPI);
    let url="https://pokeapi.co/api/v2/pokemon/" + idPokemon ;
    fetchAPI(url, info, fotoPokemon);
    link.addEventListener('click', (e) => {
    e.preventDefault(); 
    const detallsUrl = 'detalls.html?id=' + idPokemon; 
    window.location.href = detallsUrl;
    })
}


/*
Nom = Objecte.name
Imatge frontal = Objecte.sprites.front_defau
lmatge posterior = Objecte.sprites.back_default
Atac = Objecte.stats[1].base_stat
Defensa = Objecte.stats[2].base_stat
Tipus (poden ser varis) = Objecte.types[x].type.name : s'hauran
de mostrar tots els tipus
*/




