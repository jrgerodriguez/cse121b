// fetch.js
const url = "https://byui-cse.github.io/cse121b-ww-course/resources/temples.json";



async function getTemple(url) { //Esta nameless function es solo para que exista un parametro adicional y asi hacer el callback al final.
  const response = await fetch(url);
  if (response.ok) {
    const data = await response.json();
    displayTemples(data);
  }
}

function displayTemples(data) {
  const holdInfo = document.querySelector("#temples");
  temple = data;
  const toHtml = `<h3>${temple[0].templeName}</h3><img src="${temple[0].imageUrl}" alt="Image of ${temple[0].templeName}">`;
  holdInfo.innerHTML = toHtml;
}



getTemple(url)




