
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

  