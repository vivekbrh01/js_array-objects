// Value of x, y, a, b

var x = 10;
var y = "abc";
var a = x;
var b = y;

//Answer: x = 10, y = abc, a = 10, b = abc

// Value of x, y, a, b
var x = 10;
var y = "abc";
var a = x;
var b = y;
a = 5;
b = "def";

// Answer: x = 10, y = abc, a = 5, b = def. Primitive data type, copy by value.

// Value of arr & arrCopy
var arr = [1];
var arrCopy = arr;
arr.push(2);

// Answer: The value of both arr and arrCopy is [1, 2]. 
// Non-primitive data type, stores the address of memory in which the value is stored.

// Value of obj
var obj = { name: "ryan" };
obj = { surname: "florance" };

// Answer: The output will be `surname : "florence"` because the variable `obj` is a non-primitive data type. Therefore, it stores the value of the address in which the values are stored.

// What's the output.
var arr = ["Hi"];
var arr2 = arr;
console.log(arr === arr2);

// Answer: true

// What's the output.
var arr1 = ["Hi!"];
var arr2 = ["Hi!"];
console.log(arr1 === arr2);
console.log(arr == arr2);

// Answer: false in both the cases

//What's the output
console.log([10] === [10]);

// false

// What's the output?

function personDetails(person) {
  person.age = 25;
  person = {
    name: "John",
    age: 50
  };

  return person;
}
var personObj1 = {
  name: "Alex",
  age: 30
};
var personObj2 = personDetails(personObj1);
console.log(personObj1); // -> Answer: name : "Alex", age : 25;
console.log(personObj2); // -> Answer: name : "John", age : 50;  

// 

// Guess the output
var oldArray = [];
var object = {};
object.newArray = oldArray;
oldArray.push(10);
console.log(object.newArray === oldArray);

// Answer: true

// Guess the output
var a = 5;
var b = a;
a = 10;
console.log(a); // Asnwer: 10
console.log(b); // Asnwer: 5

// What's the output?
var a = {};
var b = a;
a.a = 1;
console.log(a); // Answer: a = 1
console.log(b); // Answer: a = 1



// What's the output.
var a = [];
var b = a;
a.push(1);
console.log(a); // [1]
console.log(b); // [1]
console.log(a === b); true

// Clone the object person in clone
var person = {
  name: "Mark",
  age: 34,
  subjects: {
    maths: 78,
    physics: 43
  }
};


var clone = {...person};


// Output of the following
let brothers = ["John", "Bran", "Robb"];
let house = "Stark";

let user = {
  name: "Arya",
  house: house,
  brothers: brothers
};

let user2 = {
  name: "Arya",
  house: house,
  brothers: brothers
};

let user3 = {
  name: "Arya",
  house: "Stark",
  brothers: ["John", "Bran", "Robb"]
};

// Output of the below code and why?
user.house === user2.house; // output: true
user.house == user2.house; // output: true
user.brothers === user2.brothers; // output: true
user.brothers == user2.brothers; // output: true
user.name == user2.name; // output: true
user.name === user2.name; // output: true
user.brothers == user3.brothers; // output: false
user.brothers === user3.brothers; // output: false
user.house === user2.house; // output: true
user.house === user3.house; // output: true
user.brothers[0] === user2.brothers[0]; // output: true
user.brothers[0] === user3.brothers[0]; // output: true