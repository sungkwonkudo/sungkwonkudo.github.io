/*
TITLE: AhoyJQ
AUTHOR: Sungkwon Kudo
PURPOSE: JQuery intro
ORIGINALLY CREATED ON: 21 Oct 2015
lAST MODIFIED ON: 21 Oct 2015
LAST MODIFIED BY: Sungkwon Kudo (SK)
MODIFICATION HISTORY: 
21 Oct 2015: Date created. 
*/

$ (document).ready(function(){

$('p').html('Ahoy!');

$('#one').click(function(){
	$('p').append('<br/> Ahoy again!');
});

$('#two').click(function(){
	$('p').html('A lonely ahoy.');
});

$('#thr').click(function(){
	alert("AHOY!");
});

}); // end (document).ready()