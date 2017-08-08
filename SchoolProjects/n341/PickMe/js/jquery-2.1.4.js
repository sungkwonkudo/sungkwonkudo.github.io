/*
TITLE: PickMe JQ
AUTHOR: Sungkwon Kudo
PURPOSE: JQuery selection exercise
ORIGINALLY CREATED ON: 23 Oct 2015
lAST MODIFIED ON: 23 Oct 2015
LAST MODIFIED BY: Sungkwon Kudo (SK)
MODIFICATION HISTORY: 
23 Oct 2015: Date created. 
*/

$ (document).ready(function(){

//Initially hides some elements in the html
$(".game").hide();

$("#alcohol").on('click',function(){
    $(".henchman").html("Erased name from crew list and deserted!");
});

//Turns text red and displays an "Aye!"
$("#all").on('click',function(){
    $('ul').css({
        "color": "red",
        "border": "solid, #000"})
    $('#aye').html('Aye!')
});

//Briefly shows and fades out some booze
$("#rank").on("click", function(){
    $(".game").show().fadeTo(700, 0.1).css("cursor", "pointer");
});

// Binds each event to its respective crew members
$("#vodkabottle").on("click", function(){
    $("#vodka").html("Reid 'Gray Beard' Theodore has returned!");
});

$("#rumbottle").on("click", function(){
    $("#rum").html("Webley 'The Drunk' Crutchley has returned!");
});

$("#sakebottle").on("click", function(){
    $("#sake").html("Spalding 'Immortal' Cromwell has returned!");
});

$("#whiskeybottle").on("click", function(){
    $("#whiskey").html("Tillman 'Whale-Eye' Thunder has returned!");
});

$("#ginbottle").on("click", function(){
    $("#gin").html("Cooper 'The Lion' Zindo has returned!");
});

}); // end (document).ready()