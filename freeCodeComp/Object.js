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

  //Testing Objects for Properties
  //We can use the .hasOwnProperty(propname) method of objects to determine if that object has the given property name.
  function checkObj(obj, checkProp) {

    return obj.hasOwnProperty(checkProp) ? obj[checkProp] : "Not Found";
  
  }
///////
function checkObj(obj, checkProp) {
  let result;
if(obj.hasOwnProperty(checkProp)){
  result = obj.checkProp;
} else{
  result = "Not Found";
}
return result;
}
////////
function checkObj(obj, checkProp) {
  if(obj.hasOwnProperty(checkProp)){
    return obj.checkProp;
  } else{
    return"Not Found";
  }
}
  //////

  //Manipulating Complex Objects
/**
 * Sometimes you may want to store data in a flexible Data Structure.
 * A JavaScript object is one way to handle flexible data. They allow for arbitrary
 * combinations of strings, numbers, booleans, arrays, functions, and objects.
 */

//Accessing Nested Objects
/**
 * The sub-properties of objects can be accessed by chaining together the dot or bracket notation.
 */
 const myStorage = {
  "car": {
    "inside": {
      "glove box": "maps",
      "passenger seat": "crumbs"
     },
    "outside": {
      "trunk": "jack"
    }
  }
};

const gloveBoxContents = myStorage.car.inside["glove box"];
//////////////////

//Record Collection
// Setup
const recordCollection = {
  2548: {
    albumTitle: 'Slippery When Wet',
    artist: 'Bon Jovi',
    tracks: ['Let It Rock', 'You Give Love a Bad Name']
  },
  2468: {
    albumTitle: '1999',
    artist: 'Prince',
    tracks: ['1999', 'Little Red Corvette']
  },
  1245: {
    artist: 'Robert Palmer',
    tracks: []
  },
  5439: {
    albumTitle: 'ABBA Gold'
  }
};

// Only change code below this line
function updateRecords(records, id, prop, value) {
  If(prop != "tracks" && value != ""){
    records.id.prop = value;
  } else if(prop == "tracks" && records.id.hasOwnProperty("tracks") ){
    const tracks = [];
    tracks.add(value);
  } else if(props == "tracks" && value != ""){
    records.id.tracks.add(value);
  } else if(value == ""){
    delete records.id.props;
  }
  return records;
}

updateRecords(recordCollection, 5439, 'artist', 'ABBA');