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

//extraer información del pokemon seleccionado
function fetchPokemon1(url) {
    fetch (url)
    .then(x => {
        console.dir(x);
        return x.json();
    })
    .then(y => {
        console.dir(y);
        document.getElementById(nom).innerHTML = y.name;
        document.getElementById(fotoF).setAttribute('src',y.sprites.front_default);
        document.getElementById(fotoB).setAttribute('src',y.sprites.back_default);
        document.getElementById(atac).innerHTML = y.stats[1].base_stat;
        document.getElementById(defe).innerHTML = y.stats[2].base_stat;
        //falta el tipus
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




