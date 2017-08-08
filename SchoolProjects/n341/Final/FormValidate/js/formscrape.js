/*
TITLE: 
AUTHOR: Sungkwon Kudo
PURPOSE: 
LAST MODIFIED BY: Sungkwon Kudo (SK)
MODIFICATION HISTORY: 
23 Nov 2015: Added Validation (SK)
16 Nov 2015: Date created. 
*/

$ (document).ready(function(){


$("#target").submit(function(event){
    //Form element values
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
        strNewsletter = 'You are now signed up for the newsletter.';
    } else {
        strNewsletter = 'You have declined the newsletter.'
    }
    
	//String concatenation preparation
	var outName = new String("Hi " + userName + "!");
	var outGender = new String('Gender: ' + strGender);
	var outPhone = new String('Phone: ' + strPhone);
	var outCell = new String('Cell: ' + strCell);
	var outAddress = new String(strCity + ', ' + strState);
	var outDOB = new String("Born: " + strDOB);
    var outEmail = new String('Email: ' + strEmail);
	
	var strOut = new String(outName + '<br/>' + outGender +'<br/>' + outPhone + '<br/>' +
		outCell + '<br/>' + outAddress  + '<br/>' + outDOB + '<br/>' + outEmail + '<br/>' + strNewsletter);
    
    // Prevents the default submit behavior which messes with pegasus
	event.preventDefault();
	
    /*Form Validation
    **************************************************/
    
    //Validate on submission of form
    $('#target').validate({
        rules: {
            username: {
                required: true,
                minlength: 2
            },
            password: {
                required: true,
                minlength: 5
            },
            email: {
                required: true,
                email: true
            }
        },
        messages: {
            username: {
                required: 'Please enter a username',
                minlength: 'Name must be more than 2 characters'
            },
            password: {
                required: 'Please create a password',
                minlength: 'Password must be at least 5 characters long'
            },
            email: 'Please enter a valid email address'
        },
        // On successful validation, run a function
        success: function(){
            outputDisplay();

        }
    });
    
    /* Functions
    **************************************************/
    function outputDisplay(){
        $('#target').hide();
        $('#outname').text(outName);
        $('#outemail').text(outEmail);
        $('#outnewsletter').text(strNewsletter);
        
    }
});



}); // end (document).ready()