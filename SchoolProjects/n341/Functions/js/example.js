/*
TITLE: example.js
AUTHOR: Sungkwon Kudo
PURPOSE: 
ORIGINALLY CREATED ON: 
lAST MODIFIED ON: 
LAST MODIFIED BY: 
MODIFICATION HISTORY: 
: Date created. 
*/

$ (document).ready(function(){

//Global variables
var x = 3;
var y = 2;

function multiply(p, s){
	//calling a global variable just for the heck of it 
	document.getElementById("num2").textContent = "This is a global variable called from inside a function: " + x;
	
	//Declaring local variable for demonstration sake
	var intNum = 9;
	
	var z = p*s;
	return z;
}

var a;

// multiplies and runs the textContent
a = multiply(x,y);

//This will not work since intNum is a local variable within a function. 
document.getElementById("num").textContent = "This is a local variable called globally: " + intNum;

//document.getElementById("num").textContent = "This is the result of the function: " + a;

}); // end (document).ready()