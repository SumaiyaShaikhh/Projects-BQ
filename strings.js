const text0 = "Methods of string in Java Script"


//JavaScript String Length
let text = "String in Java Script";
let length = text.length;
console.log(length) 

//Extracting String Characters
let word = "HELLO WORLD"; //The charAt(position) Method
let char = word.charAt(0);
console.log(char)
let char1 = text.charCodeAt(0); //JavaScript String charCodeAt()
console.log(char1)

//JavaScript String at()
const name = "Web Dev";
let letter = name.at(2);
console.log(letter)
let letter2 = name[2]; //Another example
console.log(letter2)

//Property Access [ ]
let place = "Argentina";
let char2 = text[0];
console.log(char2)

//Extracting String Parts
let text1 = "Apple, Banana, mango"; //JavaScript String slice() //JavaScript String substring()
let part = text1.slice(7, 13);                                 //The difference is that start and end values less than 0 are treated as 0 in substring()
console.log(part)

let str = "Watermelon, Avacado, Kiwi"; //JavaScript String substr()
let part1 = str.substr(7, 6);          // specifies the length of the extracted part.
console.log(part1)

//Converting to Upper and Lower Case
let text2 = "Hi there!";  //toUpperCase()
let text3 = text2.toUpperCase();
console.log(text3)
let text4 = text3.toLowerCase();  ////toLowerCase()
console.log(text4)

//JavaScript String concat()
let text5 = "Sumaiya";  //Joins the words
let text6 = "Shaikh";
let text7 = text5.concat(" ", text6);
console.log(text7)

text = "Sarah" + " " + "Godil"; //Another example
text = "Sarah".concat(" ", "Godil");
console.log(text)

//JavaScript String trim()
let text8 = "      Ayesha Khan      ";
let text9 = text8.trim();
console.log(text9)
let text10 = text8.trimStart();  //Another example //removes whitespace only from the start of a string.
console.log(text10)              //Just like that there's a method trimEnd() to JavaScript too.

//method trimEnd() to JavaScript
let num = "5";  //padStart()
let padded = num.padStart(4,"0");
console.log(padded)
let padded1 = num.padStart(4,"0"); //padEnd()
console.log(padded1)

let numb = 5;
let text11 = numb.toString();
let padded2 = text11.padStart(4,"0");  //To pad a number, convert the number to a string first.
console.log(padded2)

let number = "5";  //Pad a string with "x" until it reaches the length 4:
let padded3 = number.padStart(4,"x");
console.log(padded3)

//JavaScript String repeat()
let numeral = "Bano Qabil!";
let result = numeral.repeat(2);
console.log(result)

//Replacing String Content
let sentence = "I would like to have a tea please!";
let newText = sentence.replace("tea", "coffee");
console.log(newText)

//JavaScript String split()
let line = "Car, Cruise, Plane, Train"
let parts = line.split(",");  
console.log(parts);
let parts1 = line.split(" ");  //Another method
console.log(parts1);
let parts2 = line.split("|");  //Another method
console.log(parts2);
console.log(line)

//JavaScript String ReplaceAll()
let line1 = "Dogs are cute"
sum = line1.replaceAll(/Dogs/g,"Cats");
console.log(sum)