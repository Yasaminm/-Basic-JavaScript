
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
    