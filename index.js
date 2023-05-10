let UserName = "Brodsky";
let Person = { name: "Schwarz", age: 30, city: "Germany" };
const randomArray = Array.from({length: 10}, () => Math.floor(Math.random() * 30));
let max_number1 = 5;
let max_number2 = 28;

function getSum()
{
    let sum = 0;
    for (let i = 0; i < randomArray.length; i++) { sum += randomArray[i]; }
    return sum;
}

function isEven(number) {
    if(number % 2 == 0) return true;
    return false;    
}

//6 Option
function max(a, b) { return a > b ? a : b; }

console.log(`Hello, ${UserName}!`);
console.log("_____________________________________________________________________");
console.log(isEven(5));
console.log(isEven(4));
console.log("_____________________________________________________________________");
console.log(`Name ${Person.name}\nAge: ${Person.age}\nCity: ${Person.city}`);
console.log("_____________________________________________________________________");
console.log(`Array: ${randomArray}`);
console.log(`The sum of all the numbers in the array is ${getSum()}`);
console.log("_____________________________________________________________________");
console.log(`Number 1: ${max_number1}\nNumber 2: ${max_number2}\nMax value between theses numbers: ${max(max_number1, max_number2)}`);