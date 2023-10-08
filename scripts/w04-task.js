/* LESSON 3 - Programming Tasks */

/* Profile Object  */
const myProfile = {
    name: "Jorge Menjivar Rodriguez",

    photo: "images/myprofilephoto.png",

    favoriteFoods: [
        "Pasta",
        "Tacos",
        "Pizza",
        "Sushi"
    ],

    hobbies: [
        "Reading Books",
        "Listening to Music",
        "Traveling",
        "Playing Video Games"
    ],

    placesLived: [],
}




/* Populate Profile Object with placesLive objects */

myProfile.placesLived.push(
    {
    place: "San Salvador, El Salvador",
    length: "30 years",
    }
);


/* DOM Manipulation - Output */


/* Name */
document.getElementById("name").textContent = myProfile.name;

/* Photo with attributes */
document.querySelector("#photo").setAttribute("src", myProfile.photo);
document.querySelector("#photo").setAttribute("alt", "Profile picture");


/* Favorite Foods List*/
myProfile.favoriteFoods.forEach(food => {
    let li = document.createElement("li");
    li.textContent = food;
    document.querySelector("#favorite-foods").appendChild(li);
});

/* Hobbies List */

myProfile.hobbies.forEach(hobby => {
    let li = document.createElement("li");
    li.textContent = hobby;
    document.querySelector("#hobbies").appendChild(li);
});


/* Places Lived DataList */
myProfile.placesLived.forEach(object => {
    let dt = document.createElement("dt");
    dt.textContent = object.place;
    let dd = document.createElement("dd");
    dd.textContent = object.length;    
    document.querySelector("#places-lived").appendChild(dt);
    document.querySelector("#places-lived").appendChild(dd);
});


