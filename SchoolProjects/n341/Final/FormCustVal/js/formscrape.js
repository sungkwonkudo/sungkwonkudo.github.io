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

    /*Form Validation
    **************************************************/

    //Validate on submission of form
    $('#target').validate({
        // Rule to not ignore hidden fields (jquery accordian-ui hides fields)
        ignore: [],
        // Validation rules
        rules: {
            date: {
                required: true,
                date: true
            },
            phone: {
                required: true,
                phoneUS: true,
                minlength: 10
            },
            cell: {
                required: true,
                phoneUS: true,
                minlength: 10
            },
            city: "required",
            state: "required",
            username: {
				lettersonly: true,
                required: true,
                minlength: 2
            },
            password: {
                required: true,
                minlength: 5
            },
            password2: {
                required: true,
                minlength: 5,
                equalTo: "#inPass"
            },
            email: {
                required: true,
                email: true
            }
        },
        // Validation failure messages
        messages: {
            date: {
                required: 'Enter a valid date'
            },
            username: {
                required: 'Please enter a username',
                minlength: 'Name must be more than 2 characters'
            },
            password: {
                required: 'Please create a password',
                minlength: 'Password must be at least 5 characters long'
            },
            password2:{
                required: 'Please reenter password',
                minlength: 'Passwords do not match',
                equalTo: 'Passwords do not match'
            },
            email: 'Please enter a valid email address'
        } ,
        // On successful validation, run a function
        success: function(label){
            label.addClass('change').text('Good!');
        }
    });
    
        
    // Disable submit button
    $('#submit').prop({disabled:true});
    
    // Disables submit button until form is all valid.
    // Checks on blur of text field
    $('input').blur(function(event){
        if($(this).valid() && $('#target').valid()){
            $('#submit').prop({disabled: false});
        } else {
            $('#submit').prop({disabled:true});
        }
    });
    
    /* On Submit
    ************************************************************/
    $("form").submit(function(event){
        // Checks validity of entire form before submitting
        if($('#target').valid()){
            outputDisplay();
        }
        // Prevents the default submit behaviour which messes with pegasus
        event.preventDefault(); 
    });

    /* Functions
    **************************************************/
    
    // Echo back form element values to user
    // Hides the form
    // Parameters: none
    // Return: none
    function outputDisplay(){
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
        
        // Concatenate everything
        var strOut = new String(outName + '<br/>' + outGender +'<br/>' + outPhone + '<br/>' +
		outCell + '<br/>' + outAddress  + '<br/>' + outDOB + '<br/>' + outEmail + '<br/>' + strNewsletter);
        
        $('#target').hide();
        $('#outnewsletter').html(strOut);
        /*Actual output for final
        $('#outname').text(outName);
        $('#outemail').text(outEmail);
        $('#outnewsletter').text(strNewsletter);*/
    };


}); // end (document).ready()