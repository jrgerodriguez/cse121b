//First I get the information from the JSON
import url from './dataurl.js'

const messageList = [];

const getMessage = async () => {
    const response = await fetch(url);
    const data = await response.json();
    messageList.push(...data);
    displayMessage(messageList);    
};


//Here, I create the categories first as option element which will append into the select element.
const selectElement = document.getElementById('reason-list');
const messageElement = document.getElementById('message-display');
const calculatorOne = document.getElementById('first-calculator');
const calculatorTwo = document.getElementById('second-calculator');

const displayMessage = (categories) => {
    categories.forEach(category => {
        const optionElement = document.createElement("option");
        optionElement.textContent = category.reason;
        optionElement.setAttribute("value", category.reason);
        selectElement.appendChild(optionElement);


// The next event will pick the message based on the selected option.
        selectElement.addEventListener('change', function()
        {
            const selectedOption = selectElement.value;
            const selectedCategory = categories.find(category => category.reason === selectedOption);
    
        if (selectedCategory)
        {
            messageElement.textContent = `IMPORTANT: ${selectedCategory.percentage}`;
        }


//This last event will display the calculator that will provide with the correct result based on the chosen option.

        calculatorOne.style.display = 'none';
        calculatorTwo.style.display = 'none';


        if (selectedCategory.reason === categories[0].reason || selectedCategory.reason === categories[1].reason)
        {
            calculatorOne.style.display = 'block';
            
        }

        else if (selectedCategory.reason === categories[2].reason)
        {
            calculatorTwo.style.display = 'block';
        }     

    });
})};


getMessage()





//I create the function for the first calculator
function hundredPercent(number1, number2) 
{
    return number1 * number2;
}


function firstCalculator() 
{
    let numberOne = Number(document.querySelector('#salary').value);
    let numberTwo = Number(document.querySelector('#years').value);    
    document.querySelector('#result-first-calculator').value = `You will be paid $${hundredPercent(numberOne, numberTwo)}`;
}


function showAlertOne()//An Alert is included to enter a number no lower than 2 representing the amount of worked years
{
    var value = 
    parseFloat(document.querySelector('#years').value);
    if (value < 2) 
    {
        alert("REMEMBER: If you have been working for less than two years, the company is not obligated to pay a compensation since you are not elegible for this benefit.");
        document.querySelector('#years').value = "";
    } 

}


document.querySelector('#get-first-result').addEventListener('click', firstCalculator);
document.querySelector('#years').addEventListener('input', showAlertOne);


//I create the function for the second calculator
function halfPerYear (number1, number2)
{
    return (number1 / 2) * number2;
}


function secondCalculator() 
{
    let numberOne = Number(document.querySelector('#salary2').value);
    let numberTwo = Number(document.querySelector('#years2').value);    
    document.querySelector('#result-second-calculator').value = `You will be paid $${halfPerYear(numberOne, numberTwo)}`;    
}


function showAlertTwo() //An Alert is included to enter a number no lower than 2 representing the amount of worked years
{
    var value = 
    parseFloat(document.querySelector('#years2').value);
    if (value < 2) 
    {
        alert("REMEMBER: If you have been working for less than two years, the company is not obligated to pay a compensation since you are not elegible for this benefit.");
        document.querySelector('#years2').value = "";
    } 

}


document.querySelector('#get-second-result').addEventListener('click', secondCalculator);
document.querySelector('#years2').addEventListener('input', showAlertTwo);


//I create the function for the average calculator and put it all in an array
//The array uses the reduce() method to get the average of the numbers it has stored.

function aveTotal()
{
    var salaries = [];
    

    for (var i = 1; i < 2; i++)
    {
        var inputElement1 = document.querySelector('#first-month');
        var inputElement2 = document.querySelector('#second-month'); 
        var inputElement3 = document.querySelector('#third-month');    
        var inputElement4 = document.querySelector('#fourth-month');    
        var inputElement5 = document.querySelector('#fifth-month');    
        var inputElement6 = document.querySelector('#sixth-month');

        var valueInput1 = parseFloat(inputElement1.value);
        var valueInput2 = parseFloat(inputElement2.value);
        var valueInput3 = parseFloat(inputElement3.value);
        var valueInput4 = parseFloat(inputElement4.value);
        var valueInput5 = parseFloat(inputElement5.value);
        var valueInput6 = parseFloat(inputElement6.value);

        if (!isNaN(valueInput1))
        {
            salaries.push(valueInput1);
        }
        if (!isNaN(valueInput2))
        {
            salaries.push(valueInput2);
        }
        if (!isNaN(valueInput3))
        {
            salaries.push(valueInput3);
        }
        if (!isNaN(valueInput4))
        {
            salaries.push(valueInput4);
        }
        if (!isNaN(valueInput5))
        {
            salaries.push(valueInput5);
        }
        if (!isNaN(valueInput6))
        {
            salaries.push(valueInput6);
        }    
    }

    var ave = salaries.reduce(function(a, b)
    {
        return a + b
        
    }, 0) / salaries.length; 

    document.getElementById('average').value = `Your salary average is $${ave.toFixed(2)}`;

    
}

const averageButton = document.getElementById('button-average').addEventListener('click', aveTotal);




