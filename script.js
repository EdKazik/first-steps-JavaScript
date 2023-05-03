const num1 = +prompt("Are Your have a number?");

const num2 = +prompt("Are Your have a second number?");

const num3 = +prompt("Ok, and how old are You?");

const numbers = num1 + num2 + num3;

if (isNaN(numbers)) {
    alert ('Its not a number, try again!')
} else {
    alert((numbers) / 3);
}



