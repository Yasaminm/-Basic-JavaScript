/**
 * Random numbers are useful for creating random behavior.
JavaScript has a Math.random() function that generates a random decimal number between 0 (inclusive) 
and 1 (exclusive). Thus Math.random() can return a 0 but never return a 1.
 */
function randomFraction() {
  
    return Math.random();
  
  }

/**
 * It's great that we can generate random decimal numbers, 
 * but it's even more useful if we use it to generate random whole numbers.
 * Use Math.random() to generate a random decimal.
 * Use another function, Math.floor() to round the number down to its nearest whole number.
 */
//Use this technique to generate and return a random whole number between 0 and 9.
function randomWholeNum() {
  
    return Math.floor(Math.random()*10);
  }

/**
 * Instead of generating a random whole number between zero and a given number
 * like we did before, we can generate a random whole number that falls within a range of two specific numbers.
To do this, we'll define a minimum number min and a maximum number max.
 Formula: Math.floor(Math.random() * (max - min + 1)) + min
 */

 /**
  * Create a function called randomRange that takes a range myMin and myMax and returns
  * a random whole number that's greater than or equal to myMin, and is less than or equal to myMax, inclusive.
  */
  function randomRange(myMin, myMax) {
    return Math.floor(Math.random()*(myMax - myMin + 1)) + myMin;
  }