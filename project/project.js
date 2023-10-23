//First I get the information from the JSON
const messageList = [];

const getMessage = async () => {
    const response = await fetch("https://run.mocky.io/v3/2814c17c-91f6-4ffe-bc58-bcef8476eeea");
    const data = await response.json();
    messageList.push(...data);
    displayMessage(messageList);    
};

//I display the messages and create the categories.
const selectElement = document.getElementById('reason-list');
const messageElement = document.getElementById('message-display');

const displayMessage = (categories) => {
    categories.forEach(category => {
        const optionElement = document.createElement("option");
        optionElement.textContent = category.reason;
        optionElement.setAttribute("value", category.reason);
        selectElement.appendChild(optionElement);

        selectElement.addEventListener('change', function()
        {
            const selectedReason = selectElement.value;
            const selectedCategory = categories.find(category => category.reason === selectedReason);
    
        if (selectedCategory)
        {
            messageElement.textContent = `IMPORTANT: ${selectedCategory.percentage}`;
        }   
    })})};

displayMessage(messageList);
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
    document.querySelector('#result-first-calculator').value = hundredPercent(numberOne, numberTwo);    
}


function showAlertOne()
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
    document.querySelector('#result-second-calculator').value = halfPerYear(numberOne, numberTwo);    
}

function showAlertTwo()
{
    var value = 
    parseFloat(document.querySelector('#years2').value);
    if (value < 2) 
    {
        alert("REMEMBER: If you have been working for less than two years, the company is not obligated to pay a compensation since you are not elegible for this benefit.");
        document.querySelector('#years').value = "";
    } 

}

document.querySelector('#get-second-result').addEventListener('click', secondCalculator);
document.querySelector('#years2').addEventListener('input', showAlertTwo);

//I create the function for the average calculator and put it all in an array
//I will sum everything that is stored and get a total. 

const salaries = [];

const firstMonth = document.querySelector('#first-month').value;
salaries.push(firstMonth);










