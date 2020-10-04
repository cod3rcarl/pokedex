let userName = prompt("What is your trainer name?")
let h2 = document.querySelector("h2")

h2.innerText = `Trainer name: ${userName}`

let number = 1
let p1 = document.querySelector("#p1");
let p2 = document.querySelector("#p2");
let p3 = document.querySelector("#p3");
let p4 = document.querySelector("#p4");
let h1 = document.querySelector("h1");
async function getPokemon() {

    let response = await fetch(`https://pokeapi.co/api/v2/pokemon/${number}`);
   
    let data = await response.json();
    let pokemonName = data.name;
    let pokemonNo = data.id;
    
    let pokemonHeight = data.height;
    let pokemonWeight= data.weight;
    let pokemonMove1 = data.moves[0].move.name;
    let pokemonMove2 = data.moves[1].move.name;
    let pokemonMove3 = data.moves[2].move.name;
    let pokemonMove4 = data.moves[3].move.name;
    
    h1.innerText = `${pokemonName}, I CHOOSE YOU!`;

    p1.innerText = `Number: ${pokemonNo}`;
    p2.innerText = `Height: ${pokemonHeight}`;
    p3.innerText = `Weight: ${pokemonWeight}`;;
    p4.innerText = `Moves: ${pokemonMove1}, ${pokemonMove2}, ${pokemonMove3}, ${pokemonMove4}`;
    img = document.querySelector("#pokemonImage");
    img.src = data.sprites.front_default;
    let body = document.querySelector("#welcome-section");
    body.appendChild(img);
    console.log(data)
} getPokemon()
function counter() {
    number++
    return getPokemon()
}

let nextButton = document.querySelector("#next-btn")
nextButton.addEventListener("click", counter)

function counterBack() {
    number--;
    return getPokemon();
}

let previousButton = document.querySelector("#previous-btn")
previousButton.addEventListener("click", counterBack)

function random() {

let randomNumber = Math.floor(Math.random() * 151 -1);
console.log(randomNumber);
return randomNumber;

}

function randomIndex() {
    number = random();
    return getPokemon();
}

let randomButton = document.querySelector("#random-btn")
randomButton.addEventListener("click", randomIndex)

let sound = document.querySelector("#soundButton"); 
let audio = document.querySelector("#myAudio")
function playAudio() {
  audio.play();
}
