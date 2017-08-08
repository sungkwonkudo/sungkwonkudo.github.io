/*
TITLE: Filtered Pick JQ BB Challenge
AUTHOR: Sungkwon Kudo
PURPOSE: JQuery selection exercise
ORIGINALLY CREATED ON: 23 Oct 2015
lAST MODIFIED ON: 23 Oct 2015
LAST MODIFIED BY: Sungkwon Kudo (SK)
MODIFICATION HISTORY: 
28 Oct 2015: Date created. 
*/

$ (document).ready(function(){

//Initially hides some elements in the html
$(".game").hide();

//Makes some members desert due to lack of grog
$("#alcohol").on('click',function(){
    $('.henchman:even').html("Erased name from crew list and deserted!");
});

//Turns text red and displays an "Aye!"
// Only calls on the first mates of the captain
$("#all:first").on('click',function(){
    $('li[class != "henchman"]').css({
        "color": "red",
        "border": "solid, #000"})
    $('#aye').html('Aye!')
});

//Briefly shows and fades out some booze
$("#rank:last").on("click", function(){
    $(".game").show().fadeTo(700, 0.1).css("cursor", "pointer");
});

//Refresh page to go back to the good ol' days of normality.
$("#reset").click(function(){
	location.reload(true);
})

// Binds each event to its respective crew members
// Filtered so that only people who deserted can return
$("#vodkabottle").on("click", function(){
    $("#vodka:contains('deserted')").html("Reid 'Gray Beard' Theodore has returned!");
});

$("#rumbottle").on("click", function(){
    $("#rum:contains('deserted')").html("Webley 'The Drunk' Crutchley has returned!");
});

$("#sakebottle").on("click", function(){
    $("#sake:contains('deserted')").html("Spalding 'Immortal' Cromwell has returned!");
});

$("#whiskeybottle").on("click", function(){
    $("#whiskey:contains('deserted')").html("Tillman 'Whale-Eye' Thunder has returned!");
});

$("#ginbottle").on("click", function(){
    $("#gin:contains('deserted')").html("Cooper 'The Lion' Zindo has returned!");
});

}); // end (document).ready()