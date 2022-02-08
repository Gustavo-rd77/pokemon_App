const card = document.getElementById('card-pokemon');
const namePokemon = document.querySelector('.name-perfil');
const imgPokemon = document.querySelector('.img-perfil img');
const numPokemon = document.getElementById('num-pokemon');
const exp = document.querySelector(".experience");
const stats = document.querySelectorAll('.data-num');
window.addEventListener('DOMContentLoaded',()=>{
    
    pokemonData('mewtwo');
    const form  = document.getElementById('search');
    const inptNamePokemon = document.getElementById('input-search');

    form.addEventListener('submit',(e)=>{
        e.preventDefault();
        if(inptNamePokemon.value.length != 0){
            const text = inptNamePokemon.value.toLowerCase();
            pokemonData(text)
        }
        
    })
});




const pokemonData = async (name)=>{
    let url = `https://pokeapi.co/api/v2/pokemon/${name}`;
    const res = await fetch(url);
    const pokemon = await res.json();
    const dataPokemon = {
        num: pokemon.id,
        name: pokemon.forms[0].name,
        hp: pokemon.stats[0].base_stat,
        img: pokemon.sprites.other.dream_world.front_default,
        exp: pokemon.base_experience,
        attack: pokemon.stats[1].base_stat,
        defense: pokemon.stats[2].base_stat,
        specialAttack: pokemon.stats[3].base_stat,
        
    }
    card.classList.remove('hiden'); 
    numPokemon.innerHTML = dataPokemon.num;
    namePokemon.innerHTML = `<h3>${dataPokemon.name}</h3><p>${dataPokemon.hp}Hp</p>` ;
    imgPokemon.setAttribute('src',dataPokemon.img);
    exp.textContent = dataPokemon.exp + " Expc";
    stats[0].textContent = dataPokemon.attack;
    stats[1].textContent = dataPokemon.defense;
    stats[2].textContent = dataPokemon.specialAttack;
    
}

