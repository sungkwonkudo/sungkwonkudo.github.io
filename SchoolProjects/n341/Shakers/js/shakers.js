/*
TITLE: 
AUTHOR: Sungkwon Kudo
PURPOSE: 
LAST MODIFIED BY: Sungkwon Kudo (SK)
MODIFICATION HISTORY: 
16 Sep 2015: Date created. 
*/

$ (document).ready(function(){

// Events
$("h1").click(fadeSwitch)
		.css({
			"font-family": "serif"
		});;
$("#tl").click(transform);
$("#tr").click(revert);
$("#bl").click();
$("#br").click(link);

// Hide all the fancy parts of the page
$(".content, .assignments").hide();

// Functions

//Fade out and perform fancy()
function fadeSwitch(){
    $("h1").fadeOut(800, function(){
        fancy(500, 700, 650, 800);
        })
		.css({
			"font-family": "helvetica"
		});
}

// Show every panel
// Parameters change the speed of the animation (in integers.)
function fancy(a, b, c, d){
        $("#tl").show(a);
        $("#br").slideDown(b);
        $("#bl").slideDown(c);
        $("#tr").slideDown(d);
}

// Transforms layout of the page and displays assignments
// Top-Left
function transform(){
    $("#tl, .assignments").toggleClass("different");
    $("#br, #bl, #tr, #projects, #back, .assignments").fadeToggle(700);

}

// Revert all the fancy schmancy stuff
// Top-Right
function revert(){
        $("#tl").slideUp(500);
        $("#br").slideUp(700);
        $("#bl").slideUp(800);
        $("#tr").slideUp(900);
        $("h1").fadeIn(600)
		.css({
			"font-family": "serif"
		});
}

// Link back to student page
// Bottom-Right
function link(){
    window.location.href="..";
}


}); // end (document).ready()