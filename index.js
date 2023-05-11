//#1 Install the npm(node.js) (already made it!)

//#2
let UserName = "Brodsky";
let UserPerson = { name: "Schwarz", age: 30, city: "Germany" };
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
console.log(`Name ${UserPerson.name}\nAge: ${UserPerson.age}\nCity: ${UserPerson.city}`);
console.log("_____________________________________________________________________");
console.log(`Array: ${randomArray}`);
console.log(`The sum of all the numbers in the array is ${getSum()}`);
console.log("_____________________________________________________________________");
console.log(`Number 1: ${max_number1}\nNumber 2: ${max_number2}\nMax value between theses numbers: ${max(max_number1, max_number2)}`);
console.log("_____________________________________________________________________\n\n");

//#3
function createGreeting(name) { return function() { console.log(`Hello, ${name}!`); }; }

function Person(name, age) { this.name = name; this.age = age; }  
Person.prototype.greet = function() {
    console.log(`Hello, my name is ${this.name} and I am ${this.age} years old.`);
};

const greeting = createGreeting("John");
greeting();


const person1 = new Person("Lastimosa", 15);
person1.greet();

//3.
function sumRecursive(n) {
    if (n === 1) return 1;
    return n + sumRecursive(n - 1);
}

console.log(sumRecursive(10));

//4.
function getData(url, callback) {fetch(url).then(response => response.json()).then(data => callback(data)).catch(error => console.error(error));}
function callback_function(data) { console.log(data);}
//getData('https://jsonplaceholder.typicode.com/posts', callback_function);

//5.
const UserPerson_2 = { name: 'Lopez', subname: 'Miller', age: 25 };
function getPersonInfo(person) {
    const { name, subname, age } = person;
    console.log(`Hello, ${name} ${subname}! You are ${age} years old.`);
}

getPersonInfo(UserPerson_2);

//6.
function ArraysCombine(arr1, arr2) {
    const CombinedArray = [...arr1, ...arr2];
    const UniqueArray = Array.from(new Set(CombinedArray));
    return UniqueArray;
}

const array1 = [22, 30, 30, 35];
const array2 = [5, 2, 5, 100];
const combined = ArraysCombine(array1, array2);
console.log(`Array 1: ${array1}\nArray 2: ${array2}\nCombine array: ${combined}`);

//7.
function addToArrayIfNotExists(arr, n) { arr.includes(n) ?? arr.push(n);}

const array_test = [1, 2, 3, 4];
addToArrayIfNotExists(array_test, 2);
addToArrayIfNotExists(array_test, 5);
console.log(array_test);

//8.
const users = [
    { name: 'Alice', age: 28, email: 'alice@example.com'},
    { name: 'Bob', age: 31, email: 'bob@example.com'},
    { name: 'Charlie', age: 25, email: 'charlie@example.com'},
    { name: 'Dave', age: 22, email: 'dave@example.com'},
];


function getNamesOfUsersUnder30(users) {
    const filteredUsers = users.filter(user => user.age < 30).map(user => user.name);
    const usernameList = filteredUsers.reduce((acc, curr) => acc === '' ? curr : `${acc}, ${curr}`, '');
    return usernameList;
}

console.log(getNamesOfUsersUnder30(users));

//9.
async function fetchData(url) 
{
  try 
  {
    const response = await fetch(url);
    if (!response.ok) {
      throw new Error('Не удалось получить данные');
    }
    const data = await response.json();
    console.log(data);
  } 
  catch (error) 
  {
    console.error(error);
  }
}

//fetchData("https://jsonplaceholder.typicode.com/posts");

//10.
function* randomInt(start, end) { while (true) { yield Math.floor(Math.random() * (end - start + 1) + start);} }
const generator = randomInt(1, 10);
for (let i = 0; i < 10; i++) { console.log(generator.next().value); }