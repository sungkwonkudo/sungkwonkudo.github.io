/*
TITLE: conversions.js
AUTHOR: Sungkwon Kudo
PURPOSE: Javascript excersize to display and calculate user input
ORIGINALLY CREATED ON: 09 Sep 2015
lAST MODIFIED ON: 
LAST MODIFIED BY: Sungkwon Kudo (SK)
MODIFICATION HISTORY: 
09 Sep 2015: Date created.
*/

$ (document).ready(function(){

var strName;
var strDefaultName = "Bob";
var strDefaultRiches = "100";
var strRiches;
var strConcatText

var intRiches;
var intConvert;
const intToUSD = 287;

var strNamePrompt = "Yarrr, what be your name?";
var strGoldPrompt = "Looks like yuv got some doubloons in your hands. How much ye have?"

// Displays two prompts for the name and amount of gold doubloons.
strName = prompt(strNamePrompt, strDefaultName);
strRiches = prompt(strGoldPrompt, strDefaultRiches);

intRiches = parseInt(strRiches);

intConvert = intRiches*intToUSD;

//Places values inside the <p> in html
var elText = document.getElementById("amount");
elText.textContent = strRiches;

document.getElementById("name").textContent = strName;
document.getElementById("maths").textContent = intConvert;

strConcatText = "Aye, " + strName + " is worth " + intRiches + " gold doubloons, or " + intConvert + " dollars.";

document.getElementById("concat").textContent = strConcatText;

}); // end (document).ready()