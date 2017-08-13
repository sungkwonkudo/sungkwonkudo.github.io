/*
TITLE: 
AUTHOR: Sungkwon Kudo
PURPOSE: 
LAST MODIFIED BY: Sungkwon Kudo (SK)
MODIFICATION HISTORY: 
02 March 2017: Date created. 
*/

$ (document).ready(function(){

// Code for tracking window position
window.addEventListener('scroll', function(e){
	// Flat amount of how much of the page is scrolled
	var delta = document.body.scrollTop || document.documentElement.scrollTop;

	document.getElementById("display").innerHTML = delta;
	console.log(delta);
})


// Attempt to turn code into something a bit more reusable
/**
ScrollDrawEffect()
IN: String
	A css selector of the SVG to be scrolled through.
**/
function ScrollDrawEffect(SVG){
	// Selects the SVG Path and gets its total length to work with.
	var path = document.querySelector(SVG);
	var pathLength = path.getTotalLength();

	path.style.strokeDasharray=pathLength + ' ' + pathLength;
	path.style.strokeDashoffset = pathLength;
	
	window.addEventListener('scroll', function(e){
		// Find percentage based on size of document.
		var percentScroll = (document.documentElement.scrollTop + document.body.scrollTop) 
		/ (document.documentElement.scrollHeight - document.documentElement.clientHeight);

		// Length to offset the dashes
		var drawLength=pathLength*percentScroll;
		
		path.style.strokeDashoffset = pathLength - drawLength;
	})
}

// Create a random SVG path generator
// IN: Dimensions of width, height, along with maximum number of lines
// OUT: An SVG path.
function generatePath(height, width, maxlines){
    // Set the initial point
    var start = "M"+Math.floor(Math.random()*width).toString()+","+Math.floor(Math.random()*height).toString();
    var dvalue = start;
    
    // Create SVG 'd' attribute using a for loop

    for(var i=0; i<maxlines; i++){
        var randomWidth = Math.floor(Math.random()*width).toString();
        var randomHeight = Math.floor(Math.random()*height).toString();
        
        dvalue+="L"+randomWidth+","+randomHeight;
    }
    
    return dvalue;
}

document.getElementById("arc").setAttribute("d",generatePath(840,1620,100));
ScrollDrawEffect("#arc");

document.getElementById("arc1").setAttribute("d",generatePath(840,1620,70));
ScrollDrawEffect("#arc1");
}); // end (document).ready()