//You can run the same code multiple times by using a loop.
//while loop runs while a specified condition is true and stops once that condition is no longer true.
const myArray = [];
let i = 5;
while(i>=0){
  myArray.push(i);
  i--;
}
// result: [5, 4, 3, 2, 1, 0]

/**
 * The most common type of JavaScript loop is called a for loop because it runs for a specific number of times.
 */
 const myArray = [];
 for(let i=1; i<=5; i++ ){
   myArray.push(i);
 }

 //odd numbers:
 const myArray = [];
for(let i = 1; i<=9; i+=2){
  myArray.push(i);
}

//A common task in JavaScript is to iterate through the contents of an array. One way to do that is with a for loop.
const myArr = [2, 3, 4, 5, 6];
let total = 0;
for(let i=0; i<myArr.length; i++){
  total += myArr[i];
}

//Nesting For Loops
/**
 * If you have a multi-dimensional array, you can use the same logic as the prior waypoint
 * to loop through both the array and any sub-arrays. Here is an example:
 */
 const arr = [
    [1, 2], [3, 4], [5, 6]
  ];
  
  for (let i = 0; i < arr.length; i++) {
    for (let j = 0; j < arr[i].length; j++) {
      console.log(arr[i][j]);
    }
  }
  /**
   * This outputs each sub-element in arr one at a time. 
   * Note that for the inner loop, we are checking the .
   * length of arr[i], since arr[i] is itself an array.
   */
   function multiplyAll(arr) {
    let product = 1;
    for(let i=0; i<arr.length; i++){
      for(let j=0; j<arr[i].length; j++){
        product *= arr[i][j];
      }
    }
    return product;
  }
  
  multiplyAll([[1, 2], [3, 4], [5, 6, 7]]);

  //Do...While Loops
  /**
   * it will first do one pass of the code inside the loop no matter what,
   * and then continue to run the loop while the specified condition evaluates to true.
   */
   const ourArray = [];
   let i = 0;
   
   do {
     ourArray.push(i);
     i++;
   } while (i < 5);
   //[0, 1, 2, 3, 4]

   