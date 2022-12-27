//With JavaScript array variables, we can store several pieces of data in one place.
const myArray1 = ['My number', 936];

//Nest one Array within Another Array
const myArray2 = [['Tesla Number', 936], ['Crown Chakra Number', 936]];

//Access Array Data with Indexes
const myArray3 = [50, 60, 70];
const myData1 = myArray3[0];

//Unlike strings, the entries of arrays are mutable and can be changed freely, even if the array was declared with const.
const myArray4a = [18, 64, 99];
myArray4a[0] = 45 // [45, 64, 99]

//Access Multi-Dimensional Arrays With Indexes
const myArray4 = [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9],
    [[10, 11, 12], 13, 14],
  ];
  
  const myData2 = myArray4[2][1];

  //Manipulate Arrays With push()
  const myArray5 = [["John", 23], ["cat", 2]];
  myArray5.push(["dog", 3]);

  //Manipulate Arrays With pop(), pop() always removes the last element of an array. 
  const myArray6 = [["John", 23], ["cat", 2]];
const removedFromMyArray1 = myArray6.pop(); // ["cat", 2]

//Manipulate Arrays With shift(), it removes the first element instead of the last.
const myArray7 = [["John", 23], ["dog", 3]];
const removedFromMyArray2 = myArray7.shift();

//.unshift() works exactly like .push(), but instead of adding the element at the end of the array, unshift() adds the element at the beginning of the array.
const myArray8 = [["John", 23], ["dog", 3]];
myArray8.shift(); // [["dog", 3]]
myArray8.unshift(["Paul", 35]);// [["Paul", 35], ["dog", 3]]

//Accessing Nested Arrays
/**
 * Similar to accessing nested objects, array bracket notation can be chained to access nested arrays.
 */
 const ourPets = [
  {
    animalType: "cat",
    names: [
      "Meowzer",
      "Fluffy",
      "Kit-Cat"
    ]
  },
  {
    animalType: "dog",
    names: [
      "Spot",
      "Bowser",
      "Frankie"
    ]
  }
];

ourPets[0].names[1];
ourPets[1].names[0];