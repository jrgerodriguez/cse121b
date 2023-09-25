/* W02-Task - Profile Home Page */

/* Step 1 - Setup type tasks - no code required */

/* Step 2 - Variables */
const fullName = "Jorge Alberto Menjivar Rodriguez";
var currentYear = "2023";
const profilePicture = "images/myprofilephoto.jpg";




/* Step 3 - Element Variables */
const nameElement = document.getElementById('name');
const foodElement = document.getElementById('food');
const yearElement = document.querySelector('#year');
const imageElement = document.querySelector("img");




/* Step 4 - Adding Content */
nameElement.innerHTML = `<strong>${fullName}</strong>`;
yearElement.textContext = currentYear;
imageElement.setAttribute = ('src', profilePicture);
imageElement.setAttribute = ('alt', `Profile image of ${fullName}`)




/* Step 5 - Array */
const favFoods = ["Tacos", "Lasagna", "Pizza", "Pasta"];

for (let i = 0; i < favFoods.length; i++) {
    document.getElementById("food").append(favFoods[i]);
}
const additionalFoodItem = "Sushi";
favFoods.push(additionalFoodItem);
foodElement.innerHTML += `<br>${favFoods}`;
favFoods.shift();
foodElement.innerHTML += `<br>${favFoods}`;
favFoods.pop();
foodElement.innerHTML += `<br>${favFoods}`;






