/*
TITLE: iffy.js
AUTHOR: Sungkwon Kudo
PURPOSE: Working with if/else statements
ORIGINALLY CREATED ON: 21 Sep 2015
lAST MODIFIED ON: 
LAST MODIFIED BY: Sungkwon Kudo (SK)
MODIFICATION HISTORY: 
21 Sep 2015: Date created. 
*/

$ (document).ready(function(){
	alert("Arrrrr, y'all made it to port on time, aye or nay?")

}); // end (document).ready()

function iffy(){
	// Gets user input
	var strResponse=document.getElementById("answer").value;

	// Convert to upper to use in comparison statements
	var strUpperRes = strResponse.toUpperCase();
	
	if(strUpperRes == "AYE"){
		document.getElementById("result").textContent = "Ye get more doubloons fer yer werk!"
	} else if(strUpperRes == "NAY"){
		document.getElementById("result").textContent = "Go feed the sharks!"
	} else {
		document.getElementById("result").textContent = "Yer incomprehensible!"
	} //end if
} // end if