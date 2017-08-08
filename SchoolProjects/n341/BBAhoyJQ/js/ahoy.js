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

$('#fou').click(function(){
	$('p').css({
		'font-family': 'impact'
	});
	// Image source: http://misskatecuttables.blogspot.com/2014/09/ahoy-matey-tag.html
	$('body').css({
		'backgroundImage': 'url("ahoy.png")',
		'background-repeat': 'no-repeat'
	})
});

}); // end (document).ready()