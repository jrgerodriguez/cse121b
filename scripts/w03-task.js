/* LESSON 3 - Programming Tasks */

/* FUNCTIONS */

function add (number1, number2){
    return number1 + number2;
}

function subtract (number1, number2){
    return number1 - number2;
}

function multiply (number1, number2){
    return number1 * number2;
}

function divide (number1, number2){
    return number1 / number2;
}
/* Function Definition - Add Numbers */

function addNumbers () {
    let addNumber1 = Number(document.querySelector('#add1').value);
    let addNumber2 = Number(document.querySelector('#add2').value);    
    document.querySelector('#sum').value = add(addNumber1, addNumber2);    
}

document.querySelector('#addNumbers').addEventListener('click', addNumbers);



/* Function Expression - Subtract Numbers */

function subtractNumbers () {
    let subNumber1 = Number(document.querySelector('#subtract1').value);
    let subNumber2 = Number(document.querySelector('#subtract2').value);    
    document.querySelector('#difference').value = subtract(subNumber1, subNumber2);    
}

document.querySelector('#subtractNumbers').addEventListener('click', subtractNumbers);

/* Arrow Function - Multiply Numbers */

function multiplyNumbers () {
    let mulNumber1 = Number(document.querySelector('#factor1').value);
    let mulNumber2 = Number(document.querySelector('#factor2').value);    
    document.querySelector('#product').value = multiply(mulNumber1, mulNumber2);    
}

document.querySelector('#multiplyNumbers').addEventListener('click', multiplyNumbers);


/* Open Function Use - Divide Numbers */

function divideNumbers () {
    let divNumber1 = Number(document.querySelector('#dividend').value);
    let divNumber2 = Number(document.querySelector('#divisor').value);    
    document.querySelector('#quotient').value = divide(divNumber1, divNumber2);    
}

document.querySelector('#divideNumbers').addEventListener('click', divideNumbers);


/* Decision Structure */

const currentDate = new Date();
const currentYear = currentDate.getFullYear();
document.querySelector('#year').textContent = currentYear;

/* ARRAY METHODS - Functional Programming */

let numbersArray = [1,2,3,4,5,6,7,8,9,10,11,12,13];

/* Output Source Array */

document.querySelector("#array").textContent = numbersArray;

/* Output Odds Only Array */

document.querySelector("#odds").textContent = numbersArray.filter((num) => num % 2 === 1);

/* Output Evens Only Array */

document.querySelector("#evens").textContent = numbersArray.filter((num) => num % 2 === 0);

/* Output Sum of Org. Array */


document.querySelector("#sumOfArray").textContent = numbersArray.reduce((sum, number) => sum + number);

/* Output Multiplied by 2 Array */

document.querySelector("#multiplied").textContent = numbersArray.map(number => number * 2);

/* Output Sum of Multiplied by 2 Array */

document.querySelector("#sumOfMultiplied").textContent = numbersArray.map(number => number * 2).reduce((sum, number) => sum + number);

