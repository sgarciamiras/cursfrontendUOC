const colorSwitch = document.querySelector('#switch input[type="checkbox"]');
            function cambiaTema(ev){
                if(ev.target.checked){
                    document.documentElement.setAttribute('tema', 'light');
                } else {
                    document.documentElement.setAttribute('tema', 'dark');
                }
            }
            colorSwitch.addEventListener('change', cambiaTema);



//genera un número aleatori - màxim pokemons 1110
function getRandomInt(max) {
    return Math.floor(Math.random() * max);
}

//extraer información de la API
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






