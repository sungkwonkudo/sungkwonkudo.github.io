/*
TITLE: drs.js (Down Right Shot)
AUTHOR: Sungkwon Kudo
PURPOSE: 
LAST MODIFIED BY: Sungkwon Kudo (SK)
MODIFICATION HISTORY: 
28 Oct 2015: Date created. 
*/

$ (document).ready(function(){

// Hide the pirate ballad
$(".ballad").hide();

$(window).keydown(function(){
    $(".nonsense").hide();
    $(".ballad").show();
})

$(".ballad").mouseenter(function(){
    $(".ballad").css({
            "text-align": "center",
            "border" : "1px solid black",
            "width": "500px"
            });
})
}); // end (document).ready()