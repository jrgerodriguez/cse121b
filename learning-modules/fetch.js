// fetch.js
const url = "https://pokeapi.co/api/v2/pokemon/ditto";
const urlList = "https://pokeapi.co/api/v2/pokemon";


let results = null;

async function getPokemon(url, namelessFunction) { //Esta nameless function es solo para que exista un parametro adicional y asi hacer el callback al final.
  const response = await fetch(url);
  if (response.ok) {
    const data = await response.json();
    namelessFunction(data);
  }
}

function namelessFunction(data) {
    const holdInfo = document.querySelector("#output");
    results = data;
    const toHtml = `<h2>${results.name}<h2><img src="${results.sprites.front_default}" alt="Image of ${results.name}">`;
    holdInfo.innerHTML = toHtml;
}

getPokemon(url, namelessFunction);
console.log("second: ", results);

getPokemon(urlList, doStuffList); //Aqui hago el callback de la funcion, doStuffList va a reemplazar namelessFunction pero desempeñarse igual


function compare(a, b) {
  if (a.name < b.name) {
    return -1;
  }
  if (a.name > b.name) {
    return 1;
  }
  // a must be equal to b
  return 0;
}

function sortPokemon (list) {
  let sortedList = list.sort(compare);
  return sortedList;
}

function doStuffList(dataList){
  console.log(dataList);
  const holdInfoList = document.querySelector("#outputList");
  let pokeList = dataList.results;
  pokeList = sortPokemon(pokeList);
  pokeList.forEach((pokemon) => {
    const html = `<li>${pokemon.name}</li>`;
    holdInfoList.innerHTML += html;
  
  });  
}

console.log(dataList);






