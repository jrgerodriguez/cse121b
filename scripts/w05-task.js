/* W05: Programming Tasks */

/* Declare and initialize global variables */
//const url = "https://byui-cse.github.io/cse121b-ww-course/resources/temples.json";
const templesElement = document.querySelector("#temples");
templeList = [];


/* async displayTemples Function */

const displayTemples = (temples) => {
    temples.foreach((temple) => {
        const articleElement = document.createElement("article");
        const h3Element = `<h3>${temple.templeName}<h3>`;
        const imgElement = `<img src="${temple.imageUrl}" alt="Image of ${temple.templeName}">`;
        articleElement.appendChild(h3Element);
        articleElement.appendChild(imgElement);
        templesElement.appendChild(articleElement);
    })
}


/* async getTemples Function using fetch()*/

const getTemples = async () => {
    const response = await fetch("https://byui-cse.github.io/cse121b-ww-course/resources/temples.json");
    if (response.ok) {
        const data = await response.json();
        templeList.push(data);
        displayTemples(templeList);        
    }
    
} 


/* reset Function */
const reset = () => {
    document.getElementById("#temples").innerHTML="";
}

/* sortBy Function */
const sortBy = (templeList) => {
    reset();
    const filter = document.querySelector("#sortBy").value;
    switch (filter) {
        case 1:
            displayTemples(filter)
    }

}


getTemples()

/* Event Listener */
 
document.querySelector("#sortBy").addEventListener("change", () => { sortBy(templeList) });

