//Escaping Literal Quotes in Strings
//In JavaScript, you can escape a quote from considering it as an end of string quote by placing a backslash (\) in front of the quote.
const myStr = "I am a \"double quoted\" string inside \"double quotes\".";

//single and double quotes work the same in JavaScript.
const mySecondStr = '<a href="http://www.example.com" target="_blank">Link</a>';

//Escape Sequences in Strings
/*
\'	single quote
\"	double quote
\\	backslash
\n	newline
\r	carriage return
\t	tab
\b	word boundary
\f	form feed

*/
const myThirdStr = "FirstLine\n\t\\SecondLine\nThirdLine"; // Change this line

//Concatenating Strings with Plus Operator
const my4Str = "This is the start." + " This is the end.";

//Concatenating Strings with the Plus Equals Operator
let my5Str = "This is the first sentence. ";
my5Str += "This is the second sentence.";

//Constructing Strings with Variables
const myName = "Yasamin";
const my6Str = "My name is " + myName + "and I am well!";

//Appending Variables to Strings
const someAdjective = "awsome!";
let my7Str = "Learning to code is ";
my7Str += someAdjective;

//Find the Length of a String by .length
let lastNameLength = 0;
const lastName = "Lovelace";
lastNameLength = lastName.length; // 8

//Use Bracket Notation to Find the First Character in a String
let firstLetterOfLastName = "";
const lastName2 = "Lovelace";
firstLetterOfLastName = lastName2[0]; //L

//Use Bracket Notation to Find the Nth Character in a String
const lastName3 = "Lovelace";
const thirdLetterOfLastName = lastName3[2]; //v

//Use Bracket Notation to Find the Last Character in a String
const lastName4 = "Lovelace";
const lastLetterOfLastName = lastName4[lastName4.length-1]; //e

//Use Bracket Notation to Find the Nth-to-Last Character in a String
const lastName5 = "Lovelace";
const secondToLastLetterOfLastName = lastName5[lastName5.length-2]; // c

//Word Blanks
const myNoun = "dog";
const myAdjective = "big";
const myVerb = "ran";
const myAdverb = "quickly";
const wordBlanks = "My " + myAdjective + " " + myNoun + " " + myVerb + " " + myAdvrb + ".";
