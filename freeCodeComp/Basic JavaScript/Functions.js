
//Reusable function means we can call the same funcitons in multiplaces and muliple times.
function reusableFunction(){
    console.log("Hi World");
  }
  reusableFunction();

// we can pass arguments/parameters to funcitons while calling them.
  function functionWithArgs(n1, n2){
    console.log(n1+n2);
    }
    functionWithArgs(1,2);

// return a value from a function
function timesFive(num){
    return num*5;
    }
    const value = timesFive(5); // value = 25

//In JavaScript, scope refers to the visibility of variables. Variables which are defined outside of a function block have Global scope. This means, they can be seen everywhere in your JavaScript code.
//Variables which are declared without the let or const keywords are automatically created in the global scope.

  let myGlobal = 10;
  function fun1() {
    // Assign 5 to oopsGlobal Here
  oopsGlobal = 5;
  }

  function fun2() {
    var output = "";
    if (typeof myGlobal != "undefined") {
      output += "myGlobal: " + myGlobal;
    }
    if (typeof oopsGlobal != "undefined") {
      output += " oopsGlobal: " + oopsGlobal;
    }
    console.log(output);
  }  

  //Variables which are declared within a function, as well as the function parameters, have local scope.
  function myLocalScope() {
    // Only change code below this line
   const myVar= "Hi";
    console.log('inside myLocalScope', myVar);
  }

  //It is possible to have both local and global variables with the same name. When you do this, the local variable takes precedence over the global variable.
  const someVar = "Hat";

  function myFun() {
    const someVar = "Head";
    return someVar;
  } // returns Head.

  //A function can include the return statement but it does not have to. In the case that the function doesn't have a return statement, when you call it, 
  //the function processes the inner code but the returned value is undefined.

  let sum = 0;

  function addSum(num) {
    sum = sum + num;
  }

  addSum(3);

  //we can take the return value of a function and assign it to a variable.
  let processed = 0;

  function processArg(num) {
    return (num + 3) / 5;
  }
  processed = processArg(7);

  // Profile lookup
  const contacts = [
    {
      firstName: "Akira",
      lastName: "Laine",
      number: "0543236543",
      likes: ["Pizza", "Coding", "Brownie Points"],
    },
    {
      firstName: "Harry",
      lastName: "Potter",
      number: "0994372684",
      likes: ["Hogwarts", "Magic", "Hagrid"],
    },
    {
      firstName: "Sherlock",
      lastName: "Holmes",
      number: "0487345643",
      likes: ["Intriguing Cases", "Violin"],
    },
    {
      firstName: "Kristian",
      lastName: "Vos",
      number: "unknown",
      likes: ["JavaScript", "Gaming", "Foxes"],
    },
  ];
  
  function lookUpProfile(name, prop) {
    for(let i=0; i<contacts.length; i++){
      if(contacts[i].firstName === name){
        if(contacts[i].hasOwnProperty(prop)){
          return contacts[i][prop];
        }else{
          return "No such property";
        }
      }
    }
    return "No such contact";
  }
  
  lookUpProfile("Akira", "likes");

  //
//The parseInt() function parses a string and returns an integer.
//If the first character in the string can't be converted into a number, then it returns NaN.

//Use parseInt() in the convertToInteger function so it converts the input string str into an integer, and returns it.

function convertToInteger(str) {
  return parseInt(str);
}

convertToInteger("56");

/**
 * The parseInt() function parses a string and returns an integer.
 * It takes a second argument for the radix, which specifies the base of the number in the string.
 * The radix can be an integer between 2 and 36.
 * parseInt(string, radix);
 */
//Use parseInt() in the convertToInteger function so it converts a binary number to an integer and returns it.
function convertToInteger(str) {
  return parseInt(str, 2);
}

convertToInteger("10011");

////////
//Recursion to Create a Countdown
/**
 * there will be a base case. The base case tells the recursive function when it no longer needs to call itself.
 * It is a simple case where the return value is already known. There will also be a recursive call which executes the original function with different arguments.
 * If the function is written correctly, eventually the base case will be reached.
 */
/**
 * The function should use recursion to return an array containing the integers n through 1 based on the n parameter.
 * If the function is called with a number less than 1, the function should return an empty array.
 * For example, calling this function with n = 5 should return the array [5, 4, 3, 2, 1].
 * Your function must use recursion by calling itself and must not use loops of any kind.
 */
 function countdown(n){
  if(n<1){
    return [];
  } else {
    const countArray = countdown(n-1);
    countArray.unshift(n);
    return countArray;
  }
}


/**
 * We have defined a function named rangeOfNumbers with two parameters.
 * The function should return an array of integers which begins with a number represented by 
 * the startNum parameter and ends with a number represented by the endNum parameter. 
 * The starting number will always be less than or equal to the ending number. 
 * Your function must use recursion by calling itself and not use loops of any kind. 
 * It should also work for cases where both startNum and endNum are the same.
 */
 function rangeOfNumbers(startNum, endNum) {
  if(startNum > endNum){
    return [];

  } else {
    const arr = rangeOfNumbers(startNum, endNum-1);
    arr.push(endNum);
    return arr;
  }
};