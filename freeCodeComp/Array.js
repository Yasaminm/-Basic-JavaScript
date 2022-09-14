//With JavaScript array variables, we can store several pieces of data in one place.
const myArray1 = ['My number', 936];

//Nest one Array within Another Array
const myArray2 = [['Tesla Number', 936], ['Crown Chakra Number', 936]];

//Access Array Data with Indexes
const myArray3 = [50, 60, 70];
const myData = myArray3[0];

//Unlike strings, the entries of arrays are mutable and can be changed freely, even if the array was declared with const.
const myArray4 = [18, 64, 99];
myArray4[0] = 45 // [45, 64, 99]