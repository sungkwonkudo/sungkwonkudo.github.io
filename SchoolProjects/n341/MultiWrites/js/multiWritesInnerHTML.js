
/*
    TITLE: multiWritesInnerHTML.js
    AUTHOR: Sungkwon Kudo
    PURPOSE: Javascript excersize using innerHTML
	ORIGINALLY CREATED ON: 
	lAST MODIFIED ON: 31 Aug 2015
	LAST MODIFIED BY: Sungkwon Kudo
	MODIFICATION HISTORY: 
	31 Aug 2015: Date created (SK)
*/

/* 
This is the original javascript file written to test the display methods. 
It remains for future reference. 
 */
$(document).ready(function(){
	
    var strTextInnerComment = "I holler shanties.";
	var outputInnerComment = document.getElementById("cover");
	outputInnerComment.innerHTML = strTextInnerComment; 
    
}); // end document.ready