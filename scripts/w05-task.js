/* W05: Programming Tasks */

/* Declare and initialize global variables */
//const url = "https://byui-cse.github.io/cse121b-ww-course/resources/temples.json";
const templesElement = document.getElementById("temples");
const templeList = [];


/* async displayTemples Function */
const displayTemples = (temples) => {
        temples.forEach(temple => {
        const articleElement = document.createElement("article");
        const h3Element = document.createElement("h3");
        h3Element.textContent = temple.templeName;
        const imageElement = document.createElement("img");
        imageElement.setAttribute("src", temple.imageUrl);
        imageElement.setAttribute('alt', `Profile image of ${temple.templeName}`);
        articleElement.appendChild(h3Element);
        articleElement.appendChild(imageElement);
        templesElement.appendChild(articleElement);
    });
};


/* async getTemples Function using fetch()*/
const getTemples = async () => {
    const response = await fetch("https://byui-cse.github.io/cse121b-ww-course/resources/temples.json");
    const data = await response.json();
    templeList.push(...data);
    displayTemples(templeList);    
};

getTemples()


/* reset Function */
const reset = () => {
    document.getElementById("temples").innerHTML="";
};


/* sortBy Function */
const selectElement = document.getElementById("sortBy");

function sortBy() {

    const filter = selectElement.value;
    let filteredTemples = [];
    switch(filter) {
        case "utah":
        filteredTemples = templeList.filter(temple => temple.location.includes("Utah"));
        reset();
        displayTemples(filteredTemples);
        break;

        case "notutah":
        filteredTemples = templeList.filter(temple => ! temple.location.includes("Utah"));
        reset();
        displayTemples(filteredTemples);
        break;

        case "older":
        filteredTemples = templeList.filter(temple => new Date(temple.dedicatedDate) < new Date(1950, 0, 1));
        reset();
        displayTemples(filteredTemples);
        break;

        case "all":
        reset();
        displayTemples(templeList);
        break;

    }};


        


/* Event Listener */
 
document.querySelector("#sortBy").addEventListener("change", () => { sortBy(templeList) });




