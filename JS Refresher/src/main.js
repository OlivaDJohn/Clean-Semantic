//This is a comment

/*This is
an even
longer
comment*/

var myName = "John"
myName = 8

let ourName = "Atos"

const pi = 3.1416

var a;
var b = 2;

console.log(a);

a = 7;
b = a;

console.log(a);

var a1 = 5;
var b1 = 10;
var c1 = "I am a";

a1 = a1 + 1;
b1 = b1 + 5;
c1 = c1 + "String!";

var studylyCapVar;
var properCamelCase;
var titleCaseOver;

studylyCapVar = 10;
properCamelCase = "A String!"
titleCaseOver = 9000;

var sum = 10 + 10;
console.log(sum);

var diff = 45 - 33;
console.log(diff);

var product = 8 * 10;
console.log(product);

var quotient = 66 / 33;
console.log(quotient);

var myVar = 11;
myVar++;

myVar--;

var myDecimal = 0.009;

var product1 = 2.0 * 2.5;
console.log(product1);

var quotient1 = 4.4 / 2.0;

var remainder = 11 % 3;

a += 12;
b += 9;
var c = 12;
c += 7;

a -= 6;
b -=15;
c -= 1;

a *= 5;
b *= 3;
c *= 10;

a /= 12;
b /= 4;
c /= 11;

var firstName = "Jonathan";
var lastName = "Oliva";

var myStr = "I am a \"double quoted\" string inside \"double quotes\"";
console.log(myStr);

myStr = '<a href="http://www.example.com" target="_blank">Link</a>';

/*****
 CODE OUTPUT
 \' single quote
 \" double quote
 \\ backslash
 \n new line
 \r carriage return
 \t tab
 \b backspace
 \f form feed
 *****/

myStr = "FirstLine\n\t\\SecondLine\nThirdLine";
console.log(myStr);

myStr = "I come first. " + "I come second.";

myStr = "IT came first. ";
myStr += "I came second";

myName = "Jonathan";
myStr = "Hello, my name is " + myName + ", how are you?"

var anAdjective = "weird!";
var ourStr = "JavaScript is ";
ourStr += anAdjective;

myName = "Parangaricutirimicuaro";
var myNameLength = myName.length;

var firstLetterOfName = myName[0];

myStr = "Jello World";
/* myStr[0] = H
This doesnt work cus strings ar immutable*/
myStr = "Hello World";

var findTheChar = myName;
var thirdLetter = findTheChar[2];

var lastLetter = findTheChar[findTheChar.length - 1];

var thirdToLast = findTheChar[findTheChar.length - 3];

function wordBlanks(myNoun, myAdjective, myVerb, myAdverb){
    let result = "";
    result += "The " + myAdjective +" "+ myNoun +" "+ myVerb + " to the store " + myAdverb;
    return result;
}

console.log(wordBlanks("dog","big","ran","quickly"));

var myArray = ["John",20];

myArray = [["the universe",42],["everything",101010]];

console.log(myArray);

myArray = [0,10,100,1000];
var ourData = myArray[0];