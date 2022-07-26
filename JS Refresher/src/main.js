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

myArray[1] = 11;

myArray [[1,2,3],[4,5,6],[7,8,9]];

ourData = myArray[1][1];

myArray = ["Stimptson","J","cat"];
myArray.push(["happy","joy"]);

console.log(myArray);

myArray.pop();
console.log(myArray);

myArray.shift();
console.log(myArray);

myArray.unshift("Jonathan");
console.log(myArray);

var myList = [["cereal",3],["milk",2],["bananas",3],["juice",2]];

function ourReusableFunction(){
    console.log("Heyya, World");
}

ourReusableFunction();

function ourFuncWithArgs(a, b){
    console.log(a-b);
}

ourFuncWithArgs(10,5);

var myGlobal = 10;

function fun1(){
    oopsGlobal = 1;
}

function fun2(){
    var output = "";
    if (typeof myGlobal != undefined){
        output += "myGlobal: "+myGlobal;
    } if (typeof oopsGlobal != undefined){
        output += "oopsGlobal: " + oopsGlobal; 
    }
    console.log(output);
}

fun1();
fun2();

function myLocalScope(){
    let newVar = 8;
    console.log(newVar);
}

myLocalScope();
//console.log(newVar);

var outerWearer = "T-shirt";

function myOutfit(){
    outerWearer = "sweater";
    return outerWearer;
}

console.log(myOutfit());
console.log(outerWearer);

function minusSeven(num){
    return num - 7;
}
console.log(minusSeven(10));

var changed = 0;

function change(num){
    return (num + 5) / 3;
}

changed = change(10);

function nextInLine(arr, item){
    arr.push(item);
    return item;
}

var testArray = [1,2,3,4,5];

console.log("Before: " + JSON.stringify(testArray));
console.log(nextInLine(testArray, 6));
console.log("After: " + JSON.stringify(testArray));

function welcomeToBooleans(){
    return true;
}

function ourTrueOrFalse(isItTrue){
    if (isItTrue){
        return "Yes, its true";
    }
    return "No, its false";
}

console.log(ourTrueOrFalse(true));

function testEqual(val) {
    if (val == 12){
        return "Equal";
    }
    return "Not Equal";
}

console.log(testEqual(10));

function testStrict(val){
    if (val === 7){
        return "Equal";
    }
    return "Not Equal";
}

console.log(testStrict(10));

function compareEquality(a,b){
    if (a === b){
        return "Equal";
    }
    return "Not Equal";
}

console.log(compareEquality(10, "10"));

function testNotEqual(val){
    if (val != 99){
        return "Not Equal";
    }
    return "Equal";
}

console.log(testNotEqual(10));

function testStrictInequality(val){
    if (val !== 17){
        return "Not Equal";
    }
    return "Equal";
}

console.log(testStrictInequality(10));

function testGreaterThan(val){
    if (val > 100){
        return "Over 100";
    }
    if (val > 10){
        return "Over 10";
    }
    return "10 or under";
}

console.log(testGreaterThan(10));

function testGreaterOrEqual(val){
    if (val >= 20){
        return "20 or over";
    }
    if (val >= 10){
        return "10 or over";
    }
    return "Less than 10";
}

console.log(testGreaterOrEqual(10));

function testLesserThan(val){
    if (val < 25){
        return "Under 25";
    }
    if (val < 55){
        return "Under 55";
    }
    return "55 or over";
}

console.log(testLesserThan(10));

function testLessOrEqual(val){
    if (val <= 12){
        return "Smaller than or equal to 12";
    }
    if (val <= 24){
        return "Smaller than or equal to 24";
    }
    return "More than 24";
}

console.log(testLessOrEqual(10));

function testLogicalAnd(val){
    if (val <= 50 && val >= 25){
        return "Yes";
    }
    return "No";
}

console.log(testLogicalAnd(10));

function testLogicalOr(val){
    if (val < 10 || val > 20){
        return "Outside";
    }
    return "Inside";
}

console.log(testLogicalOr(15));

function testElse(val){
    let results = "";
    
    if (val > 5){
       results = "Bigger than 5";
    } else {
        results = "5 or Smaller";
    }
    return results;
}

testElse(4);

function testElseIf(val){
    if (val > 10){
        return "Greater than 10";
    } else if(val < 5){
        return "Smaller than 5";
    }
    return "Between 5 and 10";
}

console.log(testElseIf(7));

function orderMyLogic(val){
    if (val < 10){
        return "Less than 10";
    } else if(val < 5){
        return "Less than 5";
    }
    return "Greater than or equal to 10";
}

console.log(orderMyLogic(3));

function testSize(val){
    if (val >= 20){
        return "Huge";
    } else if(val < 20){
        return "Large";
    } else if(val < 15){
        return "Medium";
    } else if(val < 10){
        return "Small";
    }else if (val < 5){
        return "Tiny";
    }
}

console.log(testSize(3));

var names = ["Hole-in-one","Eagle","Birdie","Par","Bogey","Double Bogey","Go Home!"];

function golfScore(par, strokes){
    if (strokes == 1){
        return names[0];
    } else if(strokes <= (par-2)){
        return names[1];
    } else if(strokes == par - 1){
        return names[2];
    } else if(strokes == par){
        return names[3];
    }else if(strokes == par + 1){
        return names[4];
    }else if(strokes == par + 2){
        return names[5];
    }else if(strokes >= par + 3){
        return names[6];
    }
}

console.log(golfScore(5,4));

function caseInSwitch(val){
    let answer = "";
    switch (val){
        case 1:
            answer = "alpha";
            break;
        case 2:
            answer = "beta";
            break;
        case 3:
            answer = "gamma";
            break;
        case 4:
            answer = "delta";
            break;
    }
    return answer;
}

console.log(caseInSwitch(2));

function switchOfStuff(val){
    let answer = "";
    switch (val){
        case "a":
            answer = "apple";
            break;
        case "b":
            answer = "bird";
            break;
        case "c":
            answer = "cat";
            break;
        default:
            answer = "stuff";
            break;
    }
    return answer;
}

console.log(switchOfStuff(5));

function sequentialSizes(val){
    let answer = "";
    switch(val){
        case 1:
        case 2:
        case 3:
            answer = "Low";
            break;
        case 4:
        case 5:
        case 6:
            answer = "Mid";
            break;
        case 7:
        case 8:
        case 9:
            answer = "High";
            break;
    }
    return answer;
}
console.log(sequentialSizes(5));

function chainToSwitch(val){
    let answer = "";
    switch(val){
        case "bob":
            answer = "Marley";
            break;
        case 42:
            answer = "The Answer";
            break;
        case 1:
            answer = "There is no #1";
            break;
        case 99:
            answer = "Missed me by this much";
            break;
        case 7:
            answer = "Ate Nine";
            break;
        default:
            answer = "Stuff";
            break;
    }
    return answer;
}

function isLess(a,b){
    return a < b;
}

console.log(isLess(10,15));

function abTest(a,b){
    if(a < 0 || b < 0){
        return undefined;
    }

    return Math.round(Math.pow(Math.sqrt(a) + Math.sqrt(b), 2))
}

console.log(abTest(2,2));

var count = 0;

function cc(card){
    switch (card){
        case 2:
        case 3:
        case 4:
        case 5:
        case 6:
            count++;
            break;
        case 10:
        case "J":
        case "Q":
        case "K":
        case "A":
            count--;
            break;
    }

    let holdbet = "Hold";
    if (count > 0){
        holdbet = 'Bet';
    }
    return count + " " + holdbet;
}

cc(2); cc(3); cc(7); cc('K'); cc('A');
console.log(cc(4));

var myDog = {
    "name": "Camper",
    "legs": 4,
    "tails": 1,
    "friends": ["everything!"]
};

var nameValue = myDog.name;
var legsValue = myDog.legs;

var testObj = {
    "an entree": "hamburger",
    "my side": "veggies",
    "the drink": "water"
}

var entreeValue = testObj["an entree"];
var drinkValue = testObj["the drink"];

testObj = {
    12: "Namath",
    16: "Montana",
    19: "Unitas"
}

var playerNumber = 16;
var player = testObj[playerNumber];

myDog.name = "Yodeling";

myDog.bark = "Bow-wow";

delete myDog.bark;

function phoneticLookup(val){
    let result = "";
    let lookup = {
        "alpha":"Adams",
        "bravo":"Boston",
        "charlie": "Chicago",
        "delta":"Denver",
        "echo":"Easy",
        "foxtrot":"Frank"
    };
    result = lookup[val];
    /*switch(val){
        case "alpha":
            result = "Adams";
            break;
        case "bravo":
            result = "Boston";
            break;
        case "charlie":
            result = "Chicago";
            break;
        case "delta":
            result = "Denver";
            break;
        case "echo":
            result = "Easy";
            break;
        case "foxtrot":
            result = "Frank";
            break;
    }*/
    return result;
}

var myObj = {
    gift:"pony",
    pet: "kitten",
    bed:"sleight"
}
console.log(phoneticLookup("charlie"));

function checkObject(checkProp){
    if(myObj.hasOwnProperty(checkProp)){
        return myObj[checkProp];
    }
    return "Not Found";
}

console.log(checkObject("gift"));

var myMusic = [
    {
        "artist":"Billy Joel",
        "title":"Piano Man",
        "release_year":1973,
        "formats":[
            "CD",
            "8T",
            "LP"
        ],
        "gold":true
    },
    {
        "artist":"John Oliva",
        "title":"Piano Men",
        "release_year":2022,
        "formats":[
            "YouTube Video"
        ]
    }
]
