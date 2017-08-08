/*
TITLE: randomness.js
AUTHOR: Sungkwon Kudo
PURPOSE: A lab using randomness. 
ORIGINALLY CREATED ON: 16 Sep 2015
lAST MODIFIED ON: 
LAST MODIFIED BY: Sungkwon Kudo
MODIFICATION HISTORY: 
16 Sep 2015: Date created. 
*/

$ (document).ready(function(){

// A generic guessing pirate class
function Pirate(strName, strRank, intUpperRange, strText, idDisplay){
	this.strName = strName;
	this.strRank = strRank;
	this.intUpperRange = intUpperRange;
	this.idDisplay = idDisplay;
	this.strText = strText;
	this.intNum =  Math.ceil(intUpperRange*Math.random());
	this.speak = function(){
		alert(strText);
	} // end speak()
	this.guess = function(){
		document.getElementById(this.idDisplay).textContent = "I, " + this.strName + ", " + this.strRank + " of this ship, declare the number " + this.intNum + "!";
	} // end guess()
} //end Pirate class

// Pirate object initializations
var captain = new Pirate("Vanderdecken", "Captain", 10, "Who wants some extra grog?! Le's start the usualy guessing game.", "capt");
var crew1 = new Pirate("Joey", "Cook", 10, "I need th' grog",  "cook");
var crew2 = new Pirate("Nicolas", "Navigator", 10, "Arrr, gimme it. I have too much on my hands.", "navi");
var crew3 = new Pirate("Roofus", "Dog",  5, "Arrrf", "doge");

//Making events happen
captain.speak();
crew1.speak();
crew1.guess();
crew2.speak();
crew2.guess();
crew3.speak();
crew3.guess();

captain.guess();


}); // end (document).ready()