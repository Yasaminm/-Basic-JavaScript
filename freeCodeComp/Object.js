/**
 * Objects are similar to arrays, except that instead of using indexes to access 
 * and modify their data, you access the data in objects through what are called properties.
 * Objects are useful for storing data in a structured way, and can represent real world objects,
 * like a myDog object.
 */
 const myDog = {
    name: "Dogy",
    legs: 4,
    tails: 1,
    "dog friends": ["Bahar", "Bene"]
  };

  //There are two ways to access the properties of an object: dot notation (.) and bracket notation ([]), similar to an array.
  const legsNumber = myDog.legs;
  //If the property of the object you are trying to access has a space in its name, you will need to use bracket notation.
  //However, you can still use bracket notation on object properties without spaces.
  const friends = myDog["dog friends"];

  //Another use of bracket notation on objects is to access a property which is stored as the value of a variable. This can be very useful for iterating through an object's properties or when accessing a lookup table.
  //Here is an example of using a variable to access a property:

const dogs = {
  Fido: "Mutt",
  Hunter: "Doberman",
  Snoopie: "Beagle"
};

const myDogy = "Hunter";
const myBreed = dogs[myDogy];
console.log(myBreed);
//The string Doberman would be displayed in the console.
//Note that we do not use quotes around the variable name when using it to access the property because we are using the value of the variable, not the name.


//Updating Object Properties
myDog.name = "Happy Coder"; //or
myDog["name"]= "Happy Coder";

//Add New Properties to a JavaScript Object
myDog.bark = "woof woof";//or
myDog["bark"] = "woof woof";

//Delete Properties from a JavaScript Object
delete myDog.bark; //or
delete myDog["bark"];

//Using Objects for Lookups
/**
 * Objects can be thought of as a key/value storage, like a dictionary.
 * If you have tabular data, you can use an object to lookup values rather than a
 * switch statement or an if/else chain. This is most useful when you know that
 * your input data is limited to a certain range.
 */
function phoneticLookup(val) {
    let result = "";
  
    const lookup = {
      alpha: "Adams",
      bravo: "Boston",
      charlie: "Chicago",
      delta: "Denver",
      echo: "Easy",
      foxtrot: "Frank"
    }
   
    result = lookup[val];
    return result;
  }
  
  phoneticLookup("charlie");