/*
TITLE: 
AUTHOR: Sungkwon Kudo
PURPOSE: 
LAST MODIFIED BY: Sungkwon Kudo (SK)
MODIFICATION HISTORY: 
16 Sep 2015: Date created. 
*/

$ (document).ready(function(){
	
/*Buttons
********************************************/
$("#clear").click(reset);

// Submit action
$("#target").submit(function(event){
	$("output").val("Hello World");
	event.preventDefault();
	
})
	
/* Jquery UI
********************************************/
$("#accordion").accordion({
	heightStyle: "content"
});

$("#datepicker").datepicker();

$("#set").buttonset();

var stateList = [
	'Alabama', 'Alaska', 'Arizona', 
	'Arkansas', 'California', 'Colorado', 
	'Connecticut', 'Delaware', 'Florida', 
	'Georgia', 'Hawaii', 'Idaho', 'Illinois', 
	'Indiana', 'Iowa', 'Kansas', 'Kentucky', 
	'Louisiana', 'Maine', 'Maryland', 
	'Massachusetts', 'Michigan', 'Minnesota', 
	'Mississippi', 'Missouri', 'Montana', 
	'Nebraska', 'Nevada', 'New Hampshire', 
	'New Jersey', 'New Mexico', 'New York', 
	'North Carolina', 'North Dakota', 'Ohio', 
	'Oklahoma', 'Oregon', 'Pennsylvania', 
	'Rhode Island', 'South Carolina', 
	'South Dakota', 'Tennessee', 'Texas', 
	'Utah', 'Vermont', 'Virginia', 'Washington', 
	'West Virginia', 'Wisconsin', 'Wyoming'
]

$("#states").autocomplete({
	source: stateList
});
/*Functions
********************************************/

//Clears all fields.
function reset(){
	if(confirm("This will erase everything.\n Would you like to proceed?\nJapanese text")
		== true){
			$(".reset").val("");
			$("#newsletter").removeAttr("checked");
			// Radio button reset, ref from 
			// http://vijayt.com/Post/Set-RadioButton-value-using-jQuery
			$("input[name=radio]").click();
		} 
}

}); // end (document).ready()