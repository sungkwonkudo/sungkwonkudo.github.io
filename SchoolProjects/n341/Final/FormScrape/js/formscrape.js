/*
TITLE: 
AUTHOR: Sungkwon Kudo
PURPOSE: 
LAST MODIFIED BY: Sungkwon Kudo (SK)
MODIFICATION HISTORY: 
16 Sep 2015: Date created. 
*/

$ (document).ready(function(){


$("#target").submit(function(event){
    //Form elements
	var strDOB = $('#datepicker').val();
	var strGender = $('input[name="radio"]:checked','#set').val();
	var strPhone = $('#phone').val();
	var strCell = $('#cell').val();
	var strCity = $('#city').val();
	var strState = $('#states').val();
	var userName = new String($("#inName").val());
    var strEmail = $('#inEmail').val();
    var strNewsletter;
    
    if($('#newsletter').is(':checked')){
        strNewsletter = 'Signed up for the newsletter.';
    } else {
        strNewsletter = 'Declined the newsletter.'
    }
    
	//String concatenation pre-game
	var outName = new String("Hi " + userName + "!");
	var outGender = new String('Gender: ' + strGender);
	var outPhone = new String('Phone: ' + strPhone);
	var outCell = new String('Cell: ' + strCell);
	var outAddress = new String(strCity + ', ' + strState);
	var outDOB = new String("Born: " + strDOB);
    var outEmail = new String('Email: ' + strEmail);
	
	var strOut = new String(outName + '<br/>' + outGender +'<br/>' + outPhone + '<br/>' +
		outCell + '<br/>' + outAddress  + '<br/>' + outDOB + '<br/>' + outEmail + '<br/>' + strNewsletter);

	$("output").html(strOut);
	event.preventDefault();
	
});



}); // end (document).ready()