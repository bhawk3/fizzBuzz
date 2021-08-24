//Get values from the UI
//This is the controller function
function getValues() {

    //Get values from page
    let startValue = document.getElementById("startValue").value;
    let endValue = document.getElementById("endValue").value;

    //validate the values as integers
    //parse into integers
    startValue = parseInt(startValue);
    endValue = parseInt(endValue);

    //validating
    if (Number.isInteger(startValue) && Number.isInteger(endValue)) {
        //Call generateNumbers function
        let numbers = generateNumbers(startValue, endValue);
        
        //Call displayNumbers function to display the values from the generateNumbers function
        displayNumbers(numbers);
    } else {
        alert("You must enter integers");
    }
}

//Generate numbers from start value to the end value
//This is the logic functions
function generateNumbers(sValue, eValue) {
    let numbers = [];

    //Get all numbers from start to end with for loop
    for (let i = sValue; i <= eValue; i++) {
        //This will execute in a loop until index = eValue
        numbers.push(i);   
    }
    return numbers;
}

//Display the numbers and display fizz for multiples of 3 and buzz for multiples of 5 and fizzbuzz for multiples of 3,5
//This is the view functions
function displayNumbers(numbers) {

    let templateRows = "";

   for (let index = 1; index < numbers.length; index++) {
       let multiple3 = false;
       let multiple5 = false;

       let number = numbers[index];
        //logic for finding multiples of 3, 5, and if its a multiple of both

        if (number % 3 == 0 && number % 5 == 0) {
            multiple3 = true;
            multiple5 = true;
            number = "FizzBuzz";
        } else if (number % 3 == 0) {
            multiple3 = true;
            number = "Fizz";
        } else if (number % 5 == 0) {
            multiple5 = true;
            number = "Buzz";
        } 
        templateRows += `<tr><td class="${multiple3}, ${multiple5}">${number}</td></tr>`;
    }
document.getElementById("results").innerHTML = templateRows;
}

